// Automatically generated with Reach 0.1.12 (96568703)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (96568703)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc0],
      5: [ctc0, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v100], secs: v102, time: v101, didSend: v28, from: v99 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v99, v100],
    evt_cnt: 0,
    funcNum: 1,
    lct: v101,
    onlyIf: true,
    out_tys: [],
    pay: [v100, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v105, time: v104, didSend: v34, from: v103 } = txn2;
      
      sim_r.txns.push({
        amt: v100,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v108 = false;
      const v109 = v104;
      
      if (await (async () => {
        const v119 = v108 ? false : true;
        
        return v119;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v99,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v105, time: v104, didSend: v34, from: v103 } = txn2;
  ;
  let v108 = false;
  let v109 = v104;
  
  let txn3 = txn2;
  while (await (async () => {
    const v119 = v108 ? false : true;
    
    return v119;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v123], secs: v125, time: v124, didSend: v49, from: v122 } = txn4;
    ;
    const v126 = stdlib.addressEq(v99, v122);
    stdlib.assert(v126, {
      at: './index.rsh:48:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    stdlib.protect(ctc2, await interact.reportFortune(v123), {
      at: './index.rsh:51:33:application',
      fs: ['at ./index.rsh:51:33:application call to [unknown function] (defined at: ./index.rsh:51:33:function exp)', 'at ./index.rsh:51:33:application call to "liftedInteract" (defined at: ./index.rsh:51:33:application)'],
      msg: 'reportFortune',
      who: 'Alice'
      });
    
    const v130 = stdlib.protect(ctc3, await interact.confirmPayment(v100), {
      at: './index.rsh:55:57:application',
      fs: ['at ./index.rsh:54:15:application call to [unknown function] (defined at: ./index.rsh:54:19:function exp)'],
      msg: 'confirmPayment',
      who: 'Alice'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v99, v100, v103, v130],
      evt_cnt: 1,
      funcNum: 4,
      lct: v124,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:57:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v132], secs: v134, time: v133, didSend: v63, from: v131 } = txn5;
        
        ;
        if (v132) {
          const cv108 = true;
          const cv109 = v133;
          
          await (async () => {
            const v108 = cv108;
            const v109 = cv109;
            
            if (await (async () => {
              const v119 = v108 ? false : true;
              
              return v119;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v99,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();}
        else {
          
          const cv108 = false;
          const cv109 = v133;
          
          await (async () => {
            const v108 = cv108;
            const v109 = cv109;
            
            if (await (async () => {
              const v119 = v108 ? false : true;
              
              return v119;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v99,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();}
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc4, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v132], secs: v134, time: v133, didSend: v63, from: v131 } = txn5;
    ;
    const v135 = stdlib.addressEq(v103, v131);
    stdlib.assert(v135, {
      at: './index.rsh:57:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    if (v132) {
      const cv108 = true;
      const cv109 = v133;
      
      v108 = cv108;
      v109 = cv109;
      
      txn3 = txn5;
      continue;}
    else {
      stdlib.protect(ctc2, await interact.reportCancellation(), {
        at: './index.rsh:61:59:application',
        fs: ['at ./index.rsh:61:11:application call to [unknown function] (defined at: ./index.rsh:61:29:function exp)'],
        msg: 'reportCancellation',
        who: 'Alice'
        });
      
      const cv108 = false;
      const cv109 = v133;
      
      v108 = cv108;
      v109 = cv109;
      
      txn3 = txn5;
      continue;}
    
    
    
    }
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  
  
  const v95 = stdlib.protect(ctc0, interact.fortune, 'for Bob\'s interact field fortune');
  const v96 = stdlib.protect(ctc1, interact.price, 'for Bob\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v96],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v100], secs: v102, time: v101, didSend: v28, from: v99 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v100], secs: v102, time: v101, didSend: v28, from: v99 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v105, time: v104, didSend: v34, from: v103 } = txn2;
  ;
  let v108 = false;
  let v109 = v104;
  
  let txn3 = txn2;
  while (await (async () => {
    const v119 = v108 ? false : true;
    
    return v119;})()) {
    stdlib.protect(ctc2, await interact.reportFortuneReady(v100), {
      at: './index.rsh:45:34:application',
      fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:17:function exp)'],
      msg: 'reportFortuneReady',
      who: 'Bob'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v99, v100, v103, v95],
      evt_cnt: 1,
      funcNum: 3,
      lct: v109,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:48:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v123], secs: v125, time: v124, didSend: v49, from: v122 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc1, ctc4, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v123], secs: v125, time: v124, didSend: v49, from: v122 } = txn4;
    ;
    const v126 = stdlib.addressEq(v99, v122);
    stdlib.assert(v126, {
      at: './index.rsh:48:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v132], secs: v134, time: v133, didSend: v63, from: v131 } = txn5;
    ;
    const v135 = stdlib.addressEq(v103, v131);
    stdlib.assert(v135, {
      at: './index.rsh:57:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    if (v132) {
      const cv108 = true;
      const cv109 = v133;
      
      v108 = cv108;
      v109 = cv109;
      
      txn3 = txn5;
      continue;}
    else {
      stdlib.protect(ctc2, await interact.reportCancellation(), {
        at: './index.rsh:61:59:application',
        fs: ['at ./index.rsh:61:11:application call to [unknown function] (defined at: ./index.rsh:61:29:function exp)'],
        msg: 'reportCancellation',
        who: 'Bob'
        });
      
      const cv108 = false;
      const cv109 = v133;
      
      v108 = cv108;
      v109 = cv109;
      
      txn3 = txn5;
      continue;}
    
    
    
    }
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAFAAEEBSAmAgEAACI1ADEYQQH3KWRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBAwxAAL1JJAxAAGAkEkQlNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQRbNf5XKCA1/Uk1BRc1/IAE7ufoIjT8FlEHCFCwNP0xABJENPxBAAw0/zT+NP0jMgZCAOI0/zT+NP0iMgZCANZIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+VyggNf1JNQU1/IAEYnpDuDT8ULA0/zEAEkQ0/zT+FlA0/VAoSwFXAEhnSCU1ATIGNQJCANdJIwxAADgjEkQjNAESRDQESSISTDQCEhFEKGRJNQMhBFs1/4AEmouRdLA0/4gA+jQDVwAgNP8xACIyBkIAQUiBoI0GiADjIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgBYNf81/jX9Nfw1+zT+QQATsSKyATT8sggjshA0+7IHs0IAGzT7NPwWUDT9UChLAVcASGdIJDUBMgY1AkIAGzEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v100",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v100",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v123",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v132",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v123",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v132",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000ddd38038062000ddd8339810160408190526200002691620001b8565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008234156007620000e8565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000df926002929091019062000112565b50505062000297565b816200010e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000120906200025a565b90600052602060002090601f0160209004810192826200014457600085556200018f565b82601f106200015f57805160ff19168380011785556200018f565b828001600101855582156200018f579182015b828111156200018f57825182559160200191906001019062000172565b506200019d929150620001a1565b5090565b5b808211156200019d5760008155600101620001a2565b6000818303604080821215620001cd57600080fd5b80518082016001600160401b038082118383101715620001fd57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021757600080fd5b8351945060208501915084821081831117156200024457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200026f57607f821691505b602082108114156200029157634e487b7160e01b600052602260045260246000fd5b50919050565b610b3680620002a76000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a159146100835780638323075714610096578063a98bf223146100ab578063ab53f2c6146100be578063f662edcc146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046108e5565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b93660046108e5565b610256565b3480156100ca57600080fd5b506100d3610434565b60405161007a929190610908565b61005d6100ef366004610965565b6104d1565b61010460016000541460096106b2565b61011e8135158061011757506001548235145b600a6106b2565b60008080556002805461013090610977565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610977565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c191906109c8565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101f4929190610a3d565b60405180910390a161020d8160200151341460086106b2565b6102156107bf565b815181516001600160a01b03909116905260208083015182518201528151336040909101528082018051600090525143910152610251816106d7565b505050565b61026660056000541460116106b2565b6102808135158061027957506001548235145b60126106b2565b60008080556002805461029290610977565b80601f01602080910402602001604051908101604052809291908181526020018280546102be90610977565b801561030b5780601f106102e05761010080835404028352916020019161030b565b820191906000526020600020905b8154815290600101906020018083116102ee57829003601f168201915b50505050508060200190518101906103239190610a72565b90507f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943383604051610356929190610a3d565b60405180910390a161036a3415600f6106b2565b6040810151610385906001600160a01b0316331460106106b2565b6103956040830160208401610ae5565b156103e5576103a26107bf565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528082018051600190525143910152610251816106d7565b6103ed6107bf565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528082018051600090525143910152610251816106d7565b5050565b60006060600054600280805461044990610977565b80601f016020809104026020016040519081016040528092919081815260200182805461047590610977565b80156104c25780601f10610497576101008083540402835291602001916104c2565b820191906000526020600020905b8154815290600101906020018083116104a557829003601f168201915b50505050509050915091509091565b6104e1600460005414600d6106b2565b6104fb813515806104f457506001548235145b600e6106b2565b60008080556002805461050d90610977565b80601f016020809104026020016040519081016040528092919081815260200182805461053990610977565b80156105865780601f1061055b57610100808354040283529160200191610586565b820191906000526020600020905b81548152906001019060200180831161056957829003601f168201915b505050505080602001905181019061059e9190610a72565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201529091507fa36ef91336808a08b41f0a1d54d2c69d66104f8d893714b0c4667a15a935389a9060c00160405180910390a16106143415600b6106b2565b805161062c906001600160a01b03163314600c6106b2565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088528985015184528989015182168352600590955543600155875180850195909552915184880152511682840152845180830390930183526080909101909352805191926106ac92600292909101906107fe565b50505050565b816104305760405163100960cb60e01b81526004810182905260240160405180910390fd5b6020810151511561073c57805180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610722573d6000803e3d6000fd5b506000808055600181905561073990600290610882565b50565b6040805160608082018352600080835260208084018281528486018381528751516001600160a01b03908116808852895185015184528951890151821683526004909555436001558751808501959095529151848801525116828401528451808303909301835260809091019093528051919261025192600292909101906107fe565b6040805160a081018252600081830181815260608301829052608083018290528252825180840190935280835260208381019190915290919082015290565b82805461080a90610977565b90600052602060002090601f01602090048101928261082c5760008555610872565b82601f1061084557805160ff1916838001178555610872565b82800160010185558215610872579182015b82811115610872578251825591602001919060010190610857565b5061087e9291506108b8565b5090565b50805461088e90610977565b6000825580601f1061089e575050565b601f01602090049060005260206000209081019061073991905b5b8082111561087e57600081556001016108b9565b6000604082840312156108df57600080fd5b50919050565b6000604082840312156108f757600080fd5b61090183836108cd565b9392505050565b82815260006020604081840152835180604085015260005b8181101561093c57858101830151858201606001528201610920565b8181111561094e576000606083870101525b50601f01601f191692909201606001949350505050565b600060a082840312156108df57600080fd5b600181811c9082168061098b57607f821691505b602082108114156108df57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146109c357600080fd5b919050565b6000604082840312156109da57600080fd5b6040516040810181811067ffffffffffffffff82111715610a0b57634e487b7160e01b600052604160045260246000fd5b604052610a17836109ac565b8152602083015160208201528091505092915050565b803580151581146109c357600080fd5b6001600160a01b038316815281356020808301919091526060820190610a64908401610a2d565b151560408301529392505050565b600060608284031215610a8457600080fd5b6040516060810181811067ffffffffffffffff82111715610ab557634e487b7160e01b600052604160045260246000fd5b604052610ac1836109ac565b815260208301516020820152610ad9604084016109ac565b60408201529392505050565b600060208284031215610af757600080fd5b61090182610a2d56fea26469706673582212206eec94f2001f0adc0403c6b41e37583fe4f0d2ae7cf81c6e110649bb8e8ea6cb64736f6c634300080c0033`,
  BytecodeLen: 3549,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:35:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:73:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:42:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:49:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
