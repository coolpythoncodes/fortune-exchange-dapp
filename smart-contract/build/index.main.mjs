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
      5: [ctc0, ctc1, ctc0],
      6: [ctc0, ctc1, ctc0]
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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
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
  const {data: [v114], secs: v116, time: v115, didSend: v27, from: v113 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.reportFortuneReady(v114), {
    at: './index.rsh:37:36:application',
    fs: ['at ./index.rsh:37:36:application call to [unknown function] (defined at: ./index.rsh:37:36:function exp)', 'at ./index.rsh:37:36:application call to "liftedInteract" (defined at: ./index.rsh:37:36:application)'],
    msg: 'reportFortuneReady',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v113, v114],
    evt_cnt: 0,
    funcNum: 1,
    lct: v115,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v120, time: v119, didSend: v35, from: v118 } = txn2;
      
      ;
      const v121 = false;
      const v122 = v119;
      
      if (await (async () => {
        const v132 = v121 ? false : true;
        
        return v132;})()) {
        sim_r.isHalt = false;
        }
      else {
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
  const {data: [], secs: v120, time: v119, didSend: v35, from: v118 } = txn2;
  ;
  let v121 = false;
  let v122 = v119;
  
  let txn3 = txn2;
  while (await (async () => {
    const v132 = v121 ? false : true;
    
    return v132;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v137], secs: v139, time: v138, didSend: v51, from: v136 } = txn4;
    ;
    const v140 = stdlib.addressEq(v113, v136);
    stdlib.assert(v140, {
      at: './index.rsh:50:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    stdlib.protect(ctc1, await interact.reportFortune(v137), {
      at: './index.rsh:53:33:application',
      fs: ['at ./index.rsh:53:33:application call to [unknown function] (defined at: ./index.rsh:53:33:function exp)', 'at ./index.rsh:53:33:application call to "liftedInteract" (defined at: ./index.rsh:53:33:application)'],
      msg: 'reportFortune',
      who: 'Alice'
      });
    
    const v144 = stdlib.protect(ctc3, await interact.confirmPayment(v114), {
      at: './index.rsh:57:57:application',
      fs: ['at ./index.rsh:56:15:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
      msg: 'confirmPayment',
      who: 'Alice'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v113, v114, v118, v144],
      evt_cnt: 1,
      funcNum: 4,
      lct: v138,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:59:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v146], secs: v148, time: v147, didSend: v65, from: v145 } = txn5;
        
        ;
        if (v146) {
          sim_r.isHalt = false;
          }
        else {
          
          const cv121 = false;
          const cv122 = v147;
          
          await (async () => {
            const v121 = cv121;
            const v122 = cv122;
            
            if (await (async () => {
              const v132 = v121 ? false : true;
              
              return v132;})()) {
              sim_r.isHalt = false;
              }
            else {
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
    const {data: [v146], secs: v148, time: v147, didSend: v65, from: v145 } = txn5;
    ;
    const v149 = stdlib.addressEq(v118, v145);
    stdlib.assert(v149, {
      at: './index.rsh:59:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    if (v146) {
      const txn6 = await (ctc.sendrecv({
        args: [v113, v114, v118],
        evt_cnt: 0,
        funcNum: 5,
        lct: v147,
        onlyIf: true,
        out_tys: [],
        pay: [v114, []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v155, time: v154, didSend: v80, from: v153 } = txn6;
          
          sim_r.txns.push({
            amt: v114,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'from',
            to: v113,
            tok: undefined /* Nothing */
            });
          const cv121 = true;
          const cv122 = v154;
          
          await (async () => {
            const v121 = cv121;
            const v122 = cv122;
            
            if (await (async () => {
              const v132 = v121 ? false : true;
              
              return v132;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc4],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v155, time: v154, didSend: v80, from: v153 } = txn6;
      ;
      const v158 = stdlib.addressEq(v118, v153);
      stdlib.assert(v158, {
        at: './index.rsh:68:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      stdlib.protect(ctc1, await interact.reportPayment(v114), {
        at: './index.rsh:69:53:application',
        fs: ['at ./index.rsh:69:11:application call to [unknown function] (defined at: ./index.rsh:69:28:function exp)'],
        msg: 'reportPayment',
        who: 'Alice'
        });
      
      ;
      const cv121 = true;
      const cv122 = v154;
      
      v121 = cv121;
      v122 = cv122;
      
      txn3 = txn6;
      continue;
      
      }
    else {
      stdlib.protect(ctc1, await interact.reportCancellation(), {
        at: './index.rsh:63:59:application',
        fs: ['at ./index.rsh:63:11:application call to [unknown function] (defined at: ./index.rsh:63:29:function exp)'],
        msg: 'reportCancellation',
        who: 'Alice'
        });
      
      const cv121 = false;
      const cv122 = v147;
      
      v121 = cv121;
      v122 = cv122;
      
      txn3 = txn5;
      continue;}
    
    
    
    }
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v110 = stdlib.protect(ctc0, interact.price, 'for Bob\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v110],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v114], secs: v116, time: v115, didSend: v27, from: v113 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v114], secs: v116, time: v115, didSend: v27, from: v113 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v120, time: v119, didSend: v35, from: v118 } = txn2;
  ;
  let v121 = false;
  let v122 = v119;
  
  let txn3 = txn2;
  while (await (async () => {
    const v132 = v121 ? false : true;
    
    return v132;})()) {
    const v135 = stdlib.protect(ctc1, await interact.fortune(), {
      at: './index.rsh:48:50:application',
      fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:17:function exp)'],
      msg: 'fortune',
      who: 'Bob'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v113, v114, v118, v135],
      evt_cnt: 1,
      funcNum: 3,
      lct: v122,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:50:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v137], secs: v139, time: v138, didSend: v51, from: v136 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc4, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v137], secs: v139, time: v138, didSend: v51, from: v136 } = txn4;
    ;
    const v140 = stdlib.addressEq(v113, v136);
    stdlib.assert(v140, {
      at: './index.rsh:50:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v146], secs: v148, time: v147, didSend: v65, from: v145 } = txn5;
    ;
    const v149 = stdlib.addressEq(v118, v145);
    stdlib.assert(v149, {
      at: './index.rsh:59:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    if (v146) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 5,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v155, time: v154, didSend: v80, from: v153 } = txn6;
      ;
      const v158 = stdlib.addressEq(v118, v153);
      stdlib.assert(v158, {
        at: './index.rsh:68:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      stdlib.protect(ctc3, await interact.reportPayment(v114), {
        at: './index.rsh:69:53:application',
        fs: ['at ./index.rsh:69:11:application call to [unknown function] (defined at: ./index.rsh:69:28:function exp)'],
        msg: 'reportPayment',
        who: 'Bob'
        });
      
      ;
      const cv121 = true;
      const cv122 = v154;
      
      v121 = cv121;
      v122 = cv122;
      
      txn3 = txn6;
      continue;
      
      }
    else {
      stdlib.protect(ctc3, await interact.reportCancellation(), {
        at: './index.rsh:63:59:application',
        fs: ['at ./index.rsh:63:11:application call to [unknown function] (defined at: ./index.rsh:63:29:function exp)'],
        msg: 'reportCancellation',
        who: 'Bob'
        });
      
      const cv121 = false;
      const cv122 = v147;
      
      v121 = cv121;
      v122 = cv122;
      
      txn3 = txn5;
      continue;}
    
    
    
    }
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAGAAEFIAQGJgIBAAAiNQAxGEECSilkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQMMQAEoSSEEDEAAykkkDEAAVyQSRCEFNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JVs1/lcoIDX9gATMmZJcsDT+iAH3NP0xABJEsSKyATT+sggjshA0/7IHszT/NP40/SMyBkIBOkgkNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JVs1/lcoIDX9STUFFzX8gATu5+giNPwWUQcIULA0/TEAEkQ0/EEAHDT/NP4WUDT9UChLAVcASGdIIQU1ATIGNQJCASI0/zT+NP0iMgZCAM1IIQQ0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8lWzX+VyggNf1JNQU1/IAEYnpDuDT8ULA0/zEAEkQ0/zT+FlA0/VAoSwFXAEhnSCQ1ATIGNQJCAL9JIwxAAC8jEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEmouRdLA0A1cAIDQDJVsxACIyBkIAQUiBoI0GiADUIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgBJNf81/jX9Nfw1+zT+QQADQgAcNPs0/BZQNP1QKEsBVwBIZ0ghBDUBMgY1AkIAGzEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                "name": "v114",
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
                "name": "v114",
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
                "name": "v137",
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
                "name": "v146",
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
    "name": "_reach_e5",
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
                "name": "v137",
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
                "name": "v146",
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
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000fa838038062000fa88339810160408190526200002691620001b8565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008234156007620000e8565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000df926002929091019062000112565b50505062000297565b816200010e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000120906200025a565b90600052602060002090601f0160209004810192826200014457600085556200018f565b82601f106200015f57805160ff19168380011785556200018f565b828001600101855582156200018f579182015b828111156200018f57825182559160200191906001019062000172565b506200019d929150620001a1565b5090565b5b808211156200019d5760008155600101620001a2565b6000818303604080821215620001cd57600080fd5b80518082016001600160401b038082118383101715620001fd57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021757600080fd5b8351945060208501915084821081831117156200024457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200026f57607f821691505b602082108114156200029157634e487b7160e01b600052602260045260246000fd5b50919050565b610d0180620002a76000396000f3fe60806040526004361061006e5760003560e01c80638e3147691161004b5780638e314769146100c3578063a98bf223146100d6578063ab53f2c6146100e9578063f662edcc1461010c57005b80631e93b0f1146100775780632c10a1591461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610a83565b61011f565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610a83565b61027c565b6100756100e4366004610a83565b610439565b3480156100f557600080fd5b506100fe61064b565b604051610092929190610aa6565b61007561011a366004610b03565b6106e8565b61012f6001600054146009610898565b6101498135158061014257506001548235145b600a610898565b60008080556002805461015b90610b15565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610b15565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610b66565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161021f929190610bdb565b60405180910390a161023334156008610898565b61023b61095d565b815181516001600160a01b03909116905260208083015182518201528151336040909101528082018051600090525143910152610277816108bd565b505050565b61028c6006600054146015610898565b6102a68135158061029f57506001548235145b6016610898565b6000808055600280546102b890610b15565b80601f01602080910402602001604051908101604052809291908181526020018280546102e490610b15565b80156103315780601f1061030657610100808354040283529160200191610331565b820191906000526020600020905b81548152906001019060200180831161031457829003601f168201915b50505050508060200190518101906103499190610c10565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161037c929190610bdb565b60405180910390a1610395816020015134146013610898565b60408101516103b0906001600160a01b031633146014610898565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156103ed573d6000803e3d6000fd5b506103f661095d565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528082018051600190525143910152610277816108bd565b6104496005600054146011610898565b6104638135158061045c57506001548235145b6012610898565b60008080556002805461047590610b15565b80601f01602080910402602001604051908101604052809291908181526020018280546104a190610b15565b80156104ee5780601f106104c3576101008083540402835291602001916104ee565b820191906000526020600020905b8154815290600101906020018083116104d157829003601f168201915b50505050508060200190518101906105069190610c10565b90507f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943383604051610539929190610bdb565b60405180910390a161054d3415600f610898565b6040810151610568906001600160a01b031633146010610898565b6105786040830160208401610c83565b156105fc57604080516060810182526000808252602080830182815283850183815286516001600160a01b03908116865287840151909252868601519091169052600690915543600155915190916105d291839101610c9e565b604051602081830303815290604052600290805190602001906105f692919061099c565b50505050565b61060461095d565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528082018051600090525143910152610277816108bd565b5050565b60006060600054600280805461066090610b15565b80601f016020809104026020016040519081016040528092919081815260200182805461068c90610b15565b80156106d95780601f106106ae576101008083540402835291602001916106d9565b820191906000526020600020905b8154815290600101906020018083116106bc57829003601f168201915b50505050509050915091509091565b6106f8600460005414600d610898565b6107128135158061070b57506001548235145b600e610898565b60008080556002805461072490610b15565b80601f016020809104026020016040519081016040528092919081815260200182805461075090610b15565b801561079d5780601f106107725761010080835404028352916020019161079d565b820191906000526020600020905b81548152906001019060200180831161078057829003601f168201915b50505050508060200190518101906107b59190610c10565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201529091507fa36ef91336808a08b41f0a1d54d2c69d66104f8d893714b0c4667a15a935389a9060c00160405180910390a161082b3415600b610898565b8051610843906001600160a01b03163314600c610898565b604080516060810182526000808252602080830182815283850183815286516001600160a01b03908116865287840151909252868601519091169052600590915543600155915190916105d291839101610c9e565b816106475760405163100960cb60e01b81526004810182905260240160405180910390fd5b602081015151156108e157600080805560018190556108de90600290610a20565b50565b60408051606081018252600080825260208083018281528385018381528651516001600160a01b0390811686528751840151909252865186015190911690526004909155436001559151909161093991839101610c9e565b6040516020818303038152906040526002908051906020019061027792919061099c565b6040805160a081018252600081830181815260608301829052608083018290528252825180840190935280835260208381019190915290919082015290565b8280546109a890610b15565b90600052602060002090601f0160209004810192826109ca5760008555610a10565b82601f106109e357805160ff1916838001178555610a10565b82800160010185558215610a10579182015b82811115610a105782518255916020019190600101906109f5565b50610a1c929150610a56565b5090565b508054610a2c90610b15565b6000825580601f10610a3c575050565b601f0160209004906000526020600020908101906108de91905b5b80821115610a1c5760008155600101610a57565b600060408284031215610a7d57600080fd5b50919050565b600060408284031215610a9557600080fd5b610a9f8383610a6b565b9392505050565b82815260006020604081840152835180604085015260005b81811015610ada57858101830151858201606001528201610abe565b81811115610aec576000606083870101525b50601f01601f191692909201606001949350505050565b600060a08284031215610a7d57600080fd5b600181811c90821680610b2957607f821691505b60208210811415610a7d57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610b6157600080fd5b919050565b600060408284031215610b7857600080fd5b6040516040810181811067ffffffffffffffff82111715610ba957634e487b7160e01b600052604160045260246000fd5b604052610bb583610b4a565b8152602083015160208201528091505092915050565b80358015158114610b6157600080fd5b6001600160a01b038316815281356020808301919091526060820190610c02908401610bcb565b151560408301529392505050565b600060608284031215610c2257600080fd5b6040516060810181811067ffffffffffffffff82111715610c5357634e487b7160e01b600052604160045260246000fd5b604052610c5f83610b4a565b815260208301516020820152610c7760408401610b4a565b60408201529392505050565b600060208284031215610c9557600080fd5b610a9f82610bcb565b81516001600160a01b0390811682526020808401519083015260409283015116918101919091526060019056fea26469706673582212200d8af5a38aa836845a3572909b27139086543f4820fb97e33864c94f3e1e2e8a64736f6c634300080c0033`,
  BytecodeLen: 4008,
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
    at: './index.rsh:77:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:44:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:51:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:67:7:after expr stmt',
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
