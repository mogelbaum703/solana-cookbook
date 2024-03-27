import{_ as i,r as n,o as d,c,a as e,b as s,w as a,F as l,d as t,e as _}from"./app.31cab234.js";var h="/assets/account-matrix.c3a79f80.png",p="/assets/pda-curve.7c0b9307.png";const u={},m=e("h1",{id:"program-derived-addresses-pdas",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#program-derived-addresses-pdas","aria-hidden":"true"},"#"),t(" Program Derived Addresses (PDAs)")],-1),g=t("Program Derived Addresses (PDAs)\uB294 \uD2B9\uC815 Program\uC5D0 \uC758\uD574 \uC791\uB3D9\uB418\uB3C4\uB85D \uC124\uACC4\uB41C Account\uB4E4\uC785\uB2C8\uB2E4. Program\uB4E4\uC740 PDA\uB4E4\uC744 \uD1B5\uD574 Private Key \uC5C6\uC774 \uD2B9\uC815 Addresse\uC5D0 \uB300\uD574 \uC11C\uBA85\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. PDA\uB294 Solana App\uC774 \uB2E4\uB978 App\uB4E4\uACFC \uD568\uAED8 \uAD6C\uC131\uB420 \uC218 \uC788\uB3C4\uB85D \uD558\uB294 "),P={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#cross-program-invocations",target:"_blank",rel:"noopener noreferrer"},A=t("Cross-Program Invocation"),b=t("\uB97C \uC704\uD55C \uAE30\uBC18\uC73C\uB85C\uC368\uC758 \uAE30\uB2A5\uC744 \uD569\uB2C8\uB2E4."),f=e("h2",{id:"facts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#facts","aria-hidden":"true"},"#"),t(" Facts")],-1),D={class:"custom-container tip"},v=e("p",{class:"custom-container-title"},"Fact Sheet",-1),k=e("li",null,"PDAs are 32 byte strings that look like public keys, but don\u2019t have corresponding private keys",-1),x=e("li",null,"PDA\uB294 Public Key \uCC98\uB7FC \uBCF4\uC774\uB294 32 byte\uC758 String \uC774\uC9C0\uB9CC, \uB300\uC751\uB418\uB294 Private Key\uB294 \uC5C6\uC2B5\uB2C8\uB2E4.",-1),y=e("li",null,[e("code",null,"findProgramAddress"),t("\uB294 programId\uC640 seeds(collection of bytes) \uAC12\uC73C\uB85C\uBD80\uD130 \uC815\uD655\uD55C PDA\uB97C \uC870\uD68C\uD560 \uAC83\uC785\uB2C8\uB2E4.")],-1),w=e("li",null,"bump (one byte) \uB294 ed25519 \uD0C0\uC6D0 \uACE1\uC120\uC5D0\uC11C \uC7A0\uC7AC\uC801\uC778 PDA\uB97C \uBC00\uC5B4\uB0B4\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.",-1),I=t("Program\uC740 seeds\uC640 bump \uAC12\uC744 "),K={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-signed-accounts",target:"_blank",rel:"noopener noreferrer"},L=t("invoke_signed"),S=t("\uC5D0 \uC81C\uACF5\uD574\uC11C PDA\uB4E4\uC5D0 \uC11C\uBA85\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),F=e("li",null,"PDA\uB294 \uC790\uC2E0\uC744 \uB9CC\uB4E0 Program\uC5D0 \uC758\uD574\uC11C\uB9CC \uC11C\uBA85\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),N=t("PDA\uB294 Program\uC774 \uB2E4\uB978 Instruction\uB4E4\uC5D0 \uC11C\uBA85\uD558\uB3C4\uB85D \uD558\uB294 \uAC83 \uBFD0\uB9CC \uC544\uB2C8\uB77C, "),V=t("indexing accounts"),B=t("\uB97C \uC704\uD55C hashmap\uACFC \uAC19\uC740 interface \uB610\uD55C \uC81C\uACF5\uD569\uB2C8\uB2E4."),C=_('<h2 id="deep-dive" tabindex="-1"><a class="header-anchor" href="#deep-dive" aria-hidden="true">#</a> Deep Dive</h2><p>PDA\uB294 Solana\uC5D0\uC11C Program\uB4E4\uC744 \uAC1C\uBC1C\uD558\uAE30 \uC704\uD55C \uD544\uC218\uC801\uC778 \uAD6C\uC131 \uC694\uC18C\uC785\uB2C8\uB2E4. Program\uB4E4\uC740 PDA\uB4E4\uC744 \uAC00\uC9C0\uACE0 Account\uB4E4\uC5D0 \uC11C\uBA85\uD560 \uC218 \uC788\uACE0, \uB2E4\uB978 \uC0AC\uC6A9\uC790\uB4E4\uC774 \uAC19\uC740 Account\uC5D0 \uC720\uD6A8\uD55C \uC11C\uBA85\uC744 \uB9CC\uB4E4 \uC218 \uC5C6\uB2E4\uB294 \uAC83\uC744 \uBCF4\uC7A5\uD569\uB2C8\uB2E4. \uC5B4\uB5A4 Program\uB4E4\uC740 Account\uB4E4\uC5D0 \uC11C\uBA85\uD558\uB294 \uAC83\uACFC \uB354\uBD88\uC5B4 \uADF8\uB4E4\uC758 PDA\uB4E4\uC5D0 \uC758\uD574 \uB9CC\uB4E4\uC5B4\uC9C4 Account\uB4E4\uC744 \uC218\uC815\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</p><p><img src="'+h+'" alt="Accounts matrix"></p><p><small style="text-align:center;display:block;">Image courtesy of <a href="https://twitter.com/pencilflip">Pencilflip</a></small></p><h3 id="generating-pdas" tabindex="-1"><a class="header-anchor" href="#generating-pdas" aria-hidden="true">#</a> Generating PDAs</h3><p>PDA\uC5D0 \uB300\uD55C \uAC1C\uB150\uC744 \uC774\uD574\uD558\uAE30 \uC704\uD574\uC11C, PDA\uB294 \uAE30\uC220\uC801\uC73C\uB85C \uCC3D\uC870\uB41C \uAC83\uC774 \uC544\uB2C8\uB77C \uBC1C\uACAC\uB41C \uAC83\uC774\uB77C\uACE0 \uC0DD\uAC01\uD558\uB294 \uAC83\uC774 \uC880 \uB354 \uB3C4\uC6C0\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. PDA\uB4E4\uC740 seed (\uBB38\uC790\uC5F4 <code>\u201Cvote_account\u201D</code>\uC640 \uAC19\uC740)\uB4E4\uACFC Program ID\uC758 \uC870\uD569\uC73C\uB85C \uB9CC\uB4E4\uC5B4\uC9D1\uB2C8\uB2E4. \uADF8\uB7EC\uACE0 \uB098\uC11C, \uC774 seed\uB4E4\uACFC Program ID\uC758 \uC870\uD569\uC740 ed25519 \uD0C0\uC6D0 \uACE1\uC120 \uC0C1\uC5D0\uC11C Public Key\uB97C \uB9CC\uB4E4\uC5B4\uB0B4\uB294\uC9C0 \uC5EC\uBD80\uB97C \uD655\uC778\uD558\uAE30 \uC704\uD574 sha256 \uD574\uC2DC \uD568\uC218\uB85C \uBCF4\uB0B4\uC9D1\uB2C8\uB2E4.</p><p>Program ID\uC640 seeds\uB97C \uD574\uC2DC \uD568\uC218\uB85C \uB3CC\uB9AC\uB294 \uB3D9\uC548, \uD0C0\uC6D0 \uACE1\uC120\uC0C1\uC5D0 \uC788\uB294 \uC720\uD6A8\uD55C Public Key\uB97C 50% \uD655\uB960\uB85C \uBC1C\uACAC\uD569\uB2C8\uB2E4. \uC774\uB7F0 \uACBD\uC6B0, \uC6B0\uB9AC\uB294 input \uAC12\uB4E4\uC744 \uC870\uAE08 \uB2E4\uB974\uAC8C \uD558\uAE30 \uC704\uD574 \uB2E8\uC21C\uD788 \uC5B4\uB5A4 \uAC12\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4. \uC774 \uC791\uC5C5\uC744 \uC704\uD574 \uCD94\uAC00\uD558\uB294 \uAC83\uC758 \uAE30\uC220\uC801\uC778 \uC6A9\uC5B4\uB294 bump\uC785\uB2C8\uB2E4. \uC194\uB77C\uB098\uC5D0\uC11C bump \uAC12\uC740 255\uB85C \uC2DC\uC791\uD574\uC11C bum=254, bump=253, etc... \uC640 \uAC19\uC774 \uD0C0\uC6D0 \uACE1\uC120 \uC0C1\uC5D0 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 Address\uB97C \uC5BB\uC744 \uB54C\uAE4C\uC9C0 \uB2E8\uC21C\uD558\uAC8C \uAC12\uC744 \uD558\uB098\uC529 \uB0B4\uB9AC\uBA70 \uBC18\uBCF5\uD569\uB2C8\uB2E4. \uC774\uAC83\uC740 \uCD08\uBCF4\uC801\uC73C\uB85C \uBCF4\uC77C\uC9C0 \uBAA8\uB974\uC9C0\uB9CC, \uC77C\uB2E8 \uD55C\uBC88 \uBC1C\uACAC\uB418\uBA74 \uD655\uC2E4\uD788 \uC6B0\uB9AC\uB294 \uAC19\uC740 PDA\uB97C \uACC4\uC18D\uD574\uC11C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><img src="'+p+'" alt="PDA on the ellipitic curve"></p><h3 id="interacting-with-pdas" tabindex="-1"><a class="header-anchor" href="#interacting-with-pdas" aria-hidden="true">#</a> Interacting with PDAs</h3>',9),E=t("PDA\uAC00 \uC0DD\uC131\uB410\uC744 \uB54C, "),R=e("code",null,"findProgramAddress",-1),O=t("\uB294 Address\uB97C \uD0C0\uC6D0 \uACE1\uC120 \uBC16\uC73C\uB85C \uBCF4\uB0B4\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB418\uB3C4\uB85D Address\uC640 bump \uAC12\uC744 \uBC18\uD658\uD560 \uAC83\uC785\uB2C8\uB2E4. \uC774 bump \uAC12\uC73C\uB85C \uBB34\uC7A5\uD55C Program\uC740 PDA\uB97C \uC694\uAD6C\uD558\uB294 \uC5B4\uB5A4 Instruction\uC5D0\uB3C4 "),z=t("sign"),G=t("\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC11C\uBA85\uC744 \uC704\uD574 Program\uB4E4\uC740 Instruction\uB4E4\uACFC Account\uB4E4\uC758 \uBAA9\uB85D \uADF8\uB9AC\uACE0 "),T=e("code",null,"invoked_signed",-1),U=t("\uD558\uAE30 \uC704\uD574 PDA\uB97C \uC5BB\uAE30 \uC704\uD55C seeds\uC640 bump\uAC12\uB4E4\uC744 \uBCF4\uB0B4\uC57C \uD569\uB2C8\uB2E4. PDA\uB4E4\uC740 Instuction\uC5D0 \uC11C\uBA85\uD558\uB294 \uAC83\uACFC \uB354\uBD88\uC5B4 "),j=e("code",null,"invoke_signed",-1),q=t("\uB97C \uD1B5\uD574 \uC790\uC2E0\uC758 \uC0DD\uC131\uC744 \uC704\uD55C \uC11C\uBA85\uB3C4 \uD574\uC57C \uD569\uB2C8\uB2E4."),H=t("PDA\uB4E4\uC744 \uB9CC\uB4E4 \uB54C, Account Data \uC790\uCCB4\uC801\uC73C\uB85C "),J={href:"https://github.com/solana-labs/solana-program-library/blob/78e29e9238e555967b9125799d7d420d7d12b959/token-swap/program/src/state.rs#L100",target:"_blank",rel:"noopener noreferrer"},M=t("store the bump seed"),Q=t(" \uD558\uB294 \uAC83\uC740 \uD754\uD55C \uBC29\uBC95\uC785\uB2C8\uB2E4. \uC774\uAC83\uC740 \uAC1C\uBC1C\uC790\uB4E4\uC774 bump\uB97C Instruction \uC778\uC790\uB85C\uC368 \uC804\uC1A1\uD558\uC9C0 \uC54A\uACE0 \uC27D\uAC8C PDA\uB97C \uAC80\uC99D\uD558\uB3C4\uB85D \uD574\uC90D\uB2C8\uB2E4."),W=e("h2",{id:"other-resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#other-resources","aria-hidden":"true"},"#"),t(" Other Resources")],-1),X={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses",target:"_blank",rel:"noopener noreferrer"},Y=t("Official Documentation"),Z={href:"https://www.brianfriel.xyz/understanding-program-derived-addresses/",target:"_blank",rel:"noopener noreferrer"},$=t("Understanding Program Derived Addresses");function ee(te,se){const o=n("ExternalLinkIcon"),r=n("RouterLink");return d(),c(l,null,[m,e("p",null,[g,e("a",P,[A,s(o)]),b]),f,e("div",D,[v,e("ul",null,[k,x,y,w,e("li",null,[I,e("a",K,[L,s(o)]),S]),F,e("li",null,[N,s(r,{to:"/kr/guides/account-maps.html"},{default:a(()=>[V]),_:1}),B])])]),C,e("p",null,[E,R,O,s(r,{to:"/kr/references/accounts.html#sign-with-a-pda"},{default:a(()=>[z]),_:1}),G,T,U,j,q]),e("p",null,[H,e("a",J,[M,s(o)]),Q]),W,e("ul",null,[e("li",null,[e("a",X,[Y,s(o)])]),e("li",null,[e("a",Z,[$,s(o)])])])],64)}var re=i(u,[["render",ee]]);export{re as default};