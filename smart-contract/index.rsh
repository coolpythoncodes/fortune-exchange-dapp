/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1'

const commonInteract = {
  reportPayment: Fun([UInt], Null),
  reportCancellation: Fun([], Null)
}

const AliceInteract = {
  ...commonInteract,
  confirmPayment: Fun([UInt], Bool),
  reportFortune: Fun([Bytes(128)], Null),
  reportFortuneReady: Fun([UInt], Null),
}

const BobInteract = {
  ...commonInteract,
  price: UInt,
  fortune: Fun([],Bytes(128)),
}


export const main = Reach.App(() => {
  const Alice = Participant('Alice', AliceInteract)
  const Bob = Participant('Bob', BobInteract)
  init()

  Bob.only(() => {
    const price = declassify(interact.price)
  });
  Bob.publish(price);
  commit()

  Alice.interact.reportFortuneReady(price)
  Alice.publish()
  // Alice.pay(price)

  var willPurchase = false
  invariant(balance() == 0)
  while (willPurchase == false) {
    commit()

    Bob.only(() => {
      // interact.reportFortuneReady(price)
      const fortune = declassify(interact.fortune())
    });
    Bob.publish(fortune);
    commit()

    Alice.interact.reportFortune(fortune)


    Alice.only(() => {
      const willPay = declassify(interact.confirmPayment(price))
    });
    Alice.publish(willPay);

    if (!willPay) {
      // commit()
      each([Alice, Bob], () => interact.reportCancellation());
      willPurchase = willPay
      continue
    } else {
      commit()
      Alice.pay(price)
      each([Alice,Bob], () => interact.reportPayment(price));
      transfer(price).to(Bob)
      willPurchase = willPay
      continue
    }

  }

  commit()
  exit()
})