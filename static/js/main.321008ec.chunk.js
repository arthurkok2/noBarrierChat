(this["webpackJsonpno-barrier-chat"]=this["webpackJsonpno-barrier-chat"]||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/noImage.8c35acc9.png"},32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},38:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(30),r=a.n(i),l=(a(37),a(4)),c=a(5),o=a(7),u=a(6),g=a(8),m=(a(38),a(18)),h=a.n(m);a(39),a(40);h.a.initializeApp({apiKey:"AIzaSyBlKx7tzmawALlymKEkgJZiLdY4IE2VXHg",authDomain:"translatechat-6c518.firebaseapp.com",databaseURL:"https://translatechat-6c518.firebaseio.com",projectId:"translatechat-6c518",storageBucket:"translatechat-6c518.appspot.com",messagingSenderId:"187513714020",appId:"1:187513714020:web:aa171bc1b36018a37d3671"});var d=h.a,f=a(14),p=a.n(f);var v=function(e){return s.a.createElement("button",{className:"submitButton",type:"submit"},e.label)},b=a(3),E=a.n(b),S="trnsl.1.1.20191120T174117Z.30abf07a083257c3.606e1a38fc565562205063e541cb970657ab2600";var y=function(e,t,a,n){E.a.database().ref("".concat(a,"/settings/language")).once("value").then((function(s){var i=s.val();p()({method:"get",url:"https://translate.yandex.net/api/v1.5/tr.json/translate",responseType:"json",params:{key:S,text:e,format:"plain",lang:i}}).then((function(e){var s=e.data.text.join(""),i=E.a.database().ref("".concat(a,"/chats/").concat(t,"/messages")),r={message:s,type:"recieved",time:Date(Date.now().toString()).split(" GMT").splice(1,1)};i.push(r),E.a.database().ref("".concat(a,"/chats/").concat(t,"/nickname")).set(n)})).catch((function(e){console.log(e)}))}))},I=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleSubmit=function(t){t.preventDefault();var a=E.a.database().ref("".concat(e.props.sender,"/chats/").concat(e.props.reciever,"/messages")),n={message:e.state.text,type:"sent",time:Date(Date.now().toString()).split(" GMT").splice(0,1)};a.push(n),y(e.state.text,e.props.sender,e.props.reciever,e.props.nickname)},e.handleChange=function(t){e.setState({text:t.target.value})},e.state={text:""},e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"chatForm",action:"",onSubmit:this.handleSubmit},s.a.createElement("textarea",{name:"",id:"",cols:"30",rows:"10",value:this.state.text,onChange:this.handleChange,disabled:!this.props.reciever,required:!0}),s.a.createElement(v,{label:"Send"}))}}]),t}(n.Component),C=a(15),k=a.n(C);var w=function(e){return s.a.createElement("div",{className:"recentMessagesDiv"},s.a.createElement("div",{className:"chatHeader"},e.userImg?s.a.createElement("img",{src:e.userImg,alt:""}):s.a.createElement("img",{src:k.a,alt:""}),e.chattingWith?s.a.createElement("h2",null,e.chattingWith):s.a.createElement("h2",null,"No chat has been selected!")),s.a.createElement("ul",{className:"recentMessages"},e.messages.map((function(e,t){return s.a.createElement("li",{key:t,className:e.type},s.a.createElement("p",{className:"time"},e.time),s.a.createElement("p",null,e.message))}))))};var N=function(e){return s.a.createElement("li",{className:"friendButton"},s.a.createElement("button",{onClick:function(t){e.function(t.currentTarget.value,t.currentTarget.id)},value:e.name,id:e.uid},e.imgUrl?s.a.createElement("img",{src:e.imgUrl,alt:"A picture of ".concat(e.name)}):s.a.createElement("img",{src:k.a,alt:"The user has no picture"}),s.a.createElement("p",null,e.name)),s.a.createElement("button",{className:"deleteButton",onClick:e.deleteFunction,value:e.index},s.a.createElement("i",{className:"fas fa-trash-alt"})))},j=a(11);var O=function(e){return s.a.createElement("div",{className:"alert"},s.a.createElement("p",null,e.message),s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){e.functionToClose()}},e.originalLabel),e.aditionalButton?s.a.createElement("button",{onClick:e.aditionalFunction},e.aditionalLabel):""))},A=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).addFriend=function(t){t.preventDefault();var a=[];e.state.openedChats.includes(e.state.nickname)||e.state.nickname===e.props.userNickname?e.setState({errorMessage:"You already have an opened chat with ".concat(e.state.nickname),error:!0}):d.database().ref().once("value").then((function(t){var n=t.val(),s=[];for(var i in n)if("generalConfig"!==i){a.push(i);var r=d.database().ref("".concat(i,"/settings/nickname"));s.push(r.once("value"))}Promise.all(s).then((function(t){var n=!1;t.forEach((function(s,i){s.val()===e.state.nickname?(n=!0,d.database().ref("".concat(a[i],"/chats")).once("value").then((function(t){var n=[],s=t.val();for(var r in s)n.push(r);n.length<=5?(d.database().ref("".concat(e.props.userId,"/chats")).update(Object(j.a)({},a[i],{nickname:e.state.nickname,messages:""})),d.database().ref("".concat(a[i],"/chats")).update(Object(j.a)({},e.props.userId,{nickname:e.props.userNickname,messages:""}))):e.setState({errorMessage:"The user you are trying to reach has already 5 conversations opened.",error:!0})}))):i!==t.length-1||n||(console.log(n),e.setState({errorMessage:"".concat(e.state.nickname," doesn't have an account!"),error:!0}))}))}))}))},e.handleChange=function(t){e.setState({nickname:t.target.value})},e.closeAlert=function(){e.setState({error:!1})},e.state={nickname:null,openedChats:[],error:!1,errorMessage:""},e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.database().ref("".concat(this.props.userId,"/chats")).on("value",(function(t){var a=[],n=t.val();for(var s in n)a.push(n[s].nickname);e.setState({openedChats:a})}))}},{key:"render",value:function(){return s.a.createElement("div",null,this.state.error?s.a.createElement(O,{message:this.state.errorMessage,functionToClose:this.closeAlert,resend:!1}):"",s.a.createElement("form",{className:"addFriendBar",action:"",onSubmit:this.addFriend},s.a.createElement("label",{htmlFor:"nickname"},"Enter nickname of a friend to start a conversation:"),s.a.createElement("input",{type:"text",id:"nickname",placeholder:"Enter nickname",value:this.state.nickname,onChange:this.handleChange,required:!0}),s.a.createElement(v,{label:"Add"})))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).select=function(e,t){var n=function(n){var s=[],i=n.val();if(null!=i){if(i.length)s.push(i);else for(var r in i)s.push(i[r]);console.log(s)}a.setState({userId:a.props.userId,userEmail:a.props.userEmail,messages:s,chattingWithName:e,chattingWithUid:t,language:""})};console.log("".concat(a.state.userId,"/").concat(t));var s=d.database().ref("".concat(a.state.userId,"/chats/").concat(t,"/messages"));s.off("value",n),s.on("value",n)},a.deleteConversation=function(e){var t=a.state.friends[a.state.messageToDelete].uid;d.database().ref("".concat(a.state.userId,"/chats/").concat(t)).remove().then((function(){console.log("deleted")})),d.database().ref("".concat(t,"/chats/").concat(a.state.userId)).remove().then((function(){console.log("deleted")})),t===a.state.chattingWithUid?a.setState({chattingWithName:null,chattingWithUid:null,deleteConfirmation:!1}):a.setState({deleteConfirmation:!1})},a.state={userId:e.userId,userNickname:e.name,userEmail:null,chattingWithName:null,chattingWithUid:null,languageToTransalte:null,friends:[],messages:[],language:"",userImg:null,deleteConfirmation:!1,messageToDelete:null},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;null!==this.state.chattingWithUid&&d.database().ref("".concat(this.state.chattingWithUid,"/settings")).once("value").then((function(t){e.setState({language:t.val().language})}));d.database().ref("".concat(this.state.userId,"/chats")).on("value",(function(t){var a=t.val(),n=[];for(var s in a)console.log(a[s]),n.push({uid:s,name:a[s].nickname});e.setState({friends:n})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"chatPageContainer"},this.state.deleteConfirmation?s.a.createElement(O,{functionToClose:function(){e.setState({deleteConfirmation:!1})},message:"Are you sure you want to delete your conversation?",originalLabel:"Nevermind",aditionalButton:!0,aditionalFunction:this.deleteConversation,aditionalLabel:"Confirm"}):"",s.a.createElement("div",{className:"listOfFriends"},this.state.friends.length<=5?s.a.createElement(A,{userId:this.state.userId,userNickname:this.state.userNickname}):null,s.a.createElement("ul",null,this.state.friends.map((function(t,a){return s.a.createElement(N,{key:a,uid:t.uid,name:t.name,imgUrl:t.imgUrl?t.imgUrl:null,userNickname:e.state.userNickname,function:e.select,index:a,deleteFunction:function(t){e.setState({messageToDelete:t.currentTarget.value,deleteConfirmation:!0})}})})))),s.a.createElement("div",{className:"messagesAndTextContainer"},this.state.chattingWithName?"":s.a.createElement("h3",null,"Hi"," ",s.a.createElement("span",null,this.props.name),"! Start chatting without worrying about language barrier! "),s.a.createElement(w,{messages:this.state.messages,chattingWith:this.state.chattingWithName,userImg:this.state.userImg}),s.a.createElement(I,{language:this.state.language,sender:this.state.userId,reciever:this.state.chattingWithUid,nickname:this.state.userNickname}))))}}]),t}(n.Component),T=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState(Object(j.a)({},t.target.id,t.target.value))},e.signIn=function(t){var a=e.props.signInAlert;t.preventDefault(),E.a.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(t){var a=t.user.uid;E.a.database().ref("".concat(a,"/settings/language")).once("value").then((function(t){e.props.getLanguage(t.val())}))})).catch((function(e){a();var t=e.code,n=e.message;console.log(t),console.log(n)}))},e.recoverPassword=function(t){t.preventDefault(),E.a.auth().sendPasswordResetEmail(e.state.emailToRecover).then((function(){e.setState({emailSent:!0})})).catch((function(e){}))},e.state={email:"",password:"",forgetPassword:!1,emailToRecover:"",emailSent:!1},e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"signIn"},s.a.createElement("form",{action:"",onSubmit:this.signIn},s.a.createElement("h2",null,"Sign In"),s.a.createElement("label",{htmlFor:"email"},"Enter email"),s.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange,value:this.state.email,required:!0}),s.a.createElement("label",{htmlFor:"password"},"Enter password"),s.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange,value:this.state.password,required:!0}),s.a.createElement(v,{label:"Sign in"})),s.a.createElement("button",{onClick:function(){e.setState({forgetPassword:!e.state.forgetPassword})}},"Forgot your password?"),this.state.forgetPassword?s.a.createElement("form",{className:"recoverPassword",action:"",onSubmit:this.recoverPassword},s.a.createElement("label",{htmlFor:"emailToRecover"},"Enter your email:"),s.a.createElement("input",{type:"email",id:"emailToRecover",onChange:this.handleChange,required:!0}),s.a.createElement(v,{label:"Recover password"})):"",this.state.emailSent?s.a.createElement("p",null,"An email has been sent with the instructions to recover your password."):"")}}]),t}(n.Component);var U=function(e){return s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"language"},"Select your language:  "),s.a.createElement("select",{name:"language",id:"language",onChange:e.function,required:!0},e.languages.map((function(e){return s.a.createElement("option",{id:e.name,value:e.code,selected:"English"===e.name?"selected":""},e.name," ")}))))},F=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).getLanguage=function(t){console.log(t.target.value),e.setState({language:t.target.value})},e.createUser=function(t){t.preventDefault(),E.a.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){var a={chats:!1,settings:{language:e.state.language,nickname:e.state.name,email:e.state.email}};console.log(a,"here"),console.log("user",t.user.uid),E.a.database().ref("".concat(t.user.uid)).update(a),t.user.sendEmailVerification().then((function(){})).catch((function(e){console.log(e)})),t.user.updateProfile({displayName:e.state.name,language:e.state.language})})).catch((function(e){e.code;var t=e.message;console.log(t)}))},e.handleChange=function(t){e.setState(Object(j.a)({},t.target.id,t.target.value))},e.state={email:"",password:"",name:"",language:"en",signedUp:!1},e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"signUp",action:"",onSubmit:this.createUser},s.a.createElement("h2",null,"Sign up"),s.a.createElement("label",{htmlFor:"name"},"Enter nickname"),s.a.createElement("input",{type:"text",id:"name",maxLength:10,onChange:this.handleChange,value:this.state.name,required:!0}),s.a.createElement("label",{htmlFor:"email"},"Enter email"),s.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange,value:this.state.email,required:!0}),s.a.createElement("label",{htmlFor:"password"},"Enter password"),s.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange,value:this.state.password,required:!0}),s.a.createElement(U,{languages:this.props.languages,function:this.getLanguage}),s.a.createElement(v,{label:"Sign up"}))}}]),t}(n.Component),x=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).signInGuest=function(t){t.preventDefault(),E.a.auth().setPersistence(E.a.auth.Auth.Persistence.NONE).then((function(){return E.a.auth().signInAnonymously().then((function(t){var a=t.user.uid;E.a.database().ref("/generalConfig").once("value").then((function(t){e.setState({userId:a}),console.log(t.val().guestNumber);var n={chats:!1,settings:{language:e.state.language,nickname:"guest".concat(t.val().guestNumber),email:null,isGuest:!0}};E.a.database().ref("".concat(a)).update(n)}))})).catch((function(e){e.code;var t=e.message;console.log(t)}))})).catch((function(e){e.code,e.message}))},e.handleChange=function(t){e.setState(Object(j.a)({},t.target.id,t.target.value))},e.getLanguage=function(t){console.log(t.target.value),e.setState({language:t.target.value})},e.state={email:"",password:"",name:"",language:"en",userId:""},e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"guestSignIn",action:"",onSubmit:this.signInGuest},s.a.createElement("h2",null,"Sign up Guest"),s.a.createElement("p",null,"Signing in as a guest means you wont be able to select your nickname and will only be able to  get access to your conversations while logged in. If your refresh the page you will automatically logged out."),s.a.createElement(U,{languages:this.props.languages,function:this.getLanguage}),s.a.createElement(v,{label:"Sign in"}))}}]),t}(n.Component),D=function(){E.a.auth().signOut()};var W=function(e){return s.a.createElement("header",null,s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"headerMain"},s.a.createElement("h1",null,"Interpreter"),e.signedIn?s.a.createElement("nav",null,s.a.createElement("button",{onClick:D},"Sign Out"),s.a.createElement("button",{onClick:function(){e.onClickFunction()}},"Settings")):"")))};var P=function(){return s.a.createElement("footer",null,s.a.createElement("p",null,"Made by Juan Acaiturri Copyright \xa9 2019"))},M=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).languagesSelection=function(t){e.setState({language:t.target.value}),console.log(t.target.value)},e.applyChange=function(){E.a.database().ref("".concat(e.props.userUid,"/settings/")).update({language:e.state.language})},e.state={language:"",currentLanguage:"English"},e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.database().ref("".concat(this.props.userUid,"/settings/language")).once("value").then((function(t){var a=e.props.languages.filter((function(e){return e.code===t.val()}));console.log(a),e.setState({currentLanguage:a[0].name})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"settingsPage"},s.a.createElement("button",{className:"close",onClick:this.props.closeSettings},s.a.createElement("i",{class:"fas fa-times-circle"})),s.a.createElement("h2",null,"Settings"),s.a.createElement("p",null,"Current language is set to: ",this.state.currentLanguage),s.a.createElement("p",null,"Changing the language wont translate your old messages, only new messages will be recieved in the new selected language."),s.a.createElement("form",{action:"",onSubmit:this.applyChange},s.a.createElement(U,{function:this.languagesSelection,languages:this.props.languages}),s.a.createElement(v,{label:"Apply change"})))}}]),t}(n.Component),B=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).getLanguage=function(t){e.setState({language:t})},e.closeAlert=function(){e.setState({verifyAlert:!1})},e.closeSignInAlert=function(){e.setState({signInAlert:!1})},e.state={signedIn:!1,userId:null,userEmail:null,name:null,language:null,verified:null,optionSelected:"signIn",friendsVisible:!1,languagesList:["english"],settingsStatus:!1,signInAlert:!1,verifyAlert:!1},e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.auth().onAuthStateChanged((function(t){if(t&&t.emailVerified)e.setState({signedIn:!0,userId:t.uid,name:t.displayName,email:t.email,language:""});else if(t&&!t.emailVerified&&t.email)e.setState({verifyAlert:!0});else if(t&&null===t.email){var a=d.database().ref("/generalConfig");a.once("value").then((function(n){e.setState({signedIn:!0,userId:t.uid,email:null,name:"guest".concat(n.val().guestNumber)}),a.update({guestNumber:n.val().guestNumber+1})}))}else e.setState({signedIn:!1,userId:null})})),p()({method:"get",url:"https://translate.yandex.net/api/v1.5/tr.json/getLangs",responseType:"json",params:{key:"trnsl.1.1.20191120T174117Z.30abf07a083257c3.606e1a38fc565562205063e541cb970657ab2600",ui:"en"}}).then((function(t){var a=t.data.langs,n=[];for(var s in a)n.push({name:a[s],code:s});n=n.sort((function(e,t){return e.name<t.name?-1:e.name===t.name?0:1})),e.setState({languagesList:n})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(W,{signedIn:this.state.signedIn,onClickFunction:function(){e.setState({settingsStatus:!e.state.settingsStatus})}}),s.a.createElement("main",null,this.state.signedIn?s.a.createElement(L,{userId:this.state.userId,name:this.state.name,language:this.state.language,friendsVisible:this.state.friendsVisible}):s.a.createElement("div",{className:"options"},this.state.verifyAalert?s.a.createElement(O,{functionToClose:this.closeAlert,message:"Please verify your acount and refresh after! You should have recieved an email with the steps to follow!",originalLabel:"Ok",aditionalButton:!0,aditionalFunction:function(){d.auth().currentUser.sendEmailVerification()},aditionallabel:"Resend email"}):"",this.state.signInAlert?s.a.createElement(O,{functionToClose:this.closeSignInAlert,message:"You have entered an incorrect email or password!",aditionalButton:!1,originalLabel:"Ok"}):"",s.a.createElement("div",{className:"optionsButtons"},s.a.createElement("button",{onClick:function(t){return e.setState({optionSelected:t.target.value})},value:"signIn",className:"signIn"===this.state.optionSelected?"":"inactive"},"Sign In"),s.a.createElement("button",{onClick:function(t){return e.setState({optionSelected:t.target.value})},value:"signUp",className:"signUp"===this.state.optionSelected?"":"inactive"},"Sign Up"),s.a.createElement("button",{onClick:function(t){return e.setState({optionSelected:t.target.value})},value:"guestSignIn",className:"guestSignIn"===this.state.optionSelected?"":"inactive"},"Guest Sign In")),"signIn"===this.state.optionSelected?s.a.createElement(T,{getLanguage:this.getLanguage,signInAlert:function(){e.setState({signInAlert:!0})}}):"signUp"===this.state.optionSelected?s.a.createElement(F,{function:this.getLanguage,languages:this.state.languagesList}):s.a.createElement(x,{languages:this.state.languagesList})),this.state.settingsStatus&&this.state.signedIn?s.a.createElement(M,{userUid:this.state.userId,languages:this.state.languagesList,currentLanguage:this.state.language,closeSettings:function(){e.setState({settingsStatus:!e.state.settingsStatus})}}):""),s.a.createElement(P,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.321008ec.chunk.js.map