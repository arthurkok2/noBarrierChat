(this["webpackJsonpno-barrier-chat"]=this["webpackJsonpno-barrier-chat"]||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/noImage.8c35acc9.png"},20:function(e,t,a){},33:function(e,t,a){e.exports=a(64)},64:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(31),r=a.n(i),l=(a(20),a(4)),c=a(5),o=a(7),u=a(6),m=a(8),g=a(18),h=a.n(g);a(38),a(39);h.a.initializeApp({apiKey:"AIzaSyBlKx7tzmawALlymKEkgJZiLdY4IE2VXHg",authDomain:"translatechat-6c518.firebaseapp.com",databaseURL:"https://translatechat-6c518.firebaseio.com",projectId:"translatechat-6c518",storageBucket:"translatechat-6c518.appspot.com",messagingSenderId:"187513714020",appId:"1:187513714020:web:aa171bc1b36018a37d3671"});var d=h.a,p=a(11),f=a.n(p);var v=function(e){return s.a.createElement("button",{disabled:e.disabled,className:"submitButton",type:"submit"},e.label)},b=a(3),E=a.n(b),S="trnsl.1.1.20191120T174117Z.30abf07a083257c3.606e1a38fc565562205063e541cb970657ab2600";var y=function(e,t,a,n){E.a.database().ref("".concat(a,"/settings/language")).once("value").then((function(s){var i=s.val();f()({method:"get",url:"https://translate.yandex.net/api/v1.5/tr.json/translate",responseType:"json",params:{key:S,text:e,format:"plain",lang:i}}).then((function(e){var s=e.data.text.join(""),i=E.a.database().ref("".concat(a,"/chats/").concat(t,"/messages")),r={message:s,type:"recieved",time:Date(Date.now().toString()).split(" GMT").splice(0,1),format:"text"};i.push(r),E.a.database().ref("".concat(a,"/chats/").concat(t,"/nickname")).set(n)}))}))},k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).search=function(t){t.preventDefault(),f()({url:"//api.giphy.com/v1/gifs/search",responseType:"json",method:"get",params:{api_key:"5o3FJkFysfmiqM09a9Z3ifEWL0HqHhLB",q:e.state.query}}).then((function(t){var a=Math.floor(19*Math.random()),n=t.data.data.slice(a,a+6);e.setState({gifsArray:n})}))},e.sendGif=function(t){var a=t.currentTarget.value,n=t.currentTarget.id,s=E.a.database().ref("".concat(e.props.sender,"/chats/").concat(e.props.reciever,"/messages")),i={message:a,type:"sent",time:Date(Date.now().toString()).split(" GMT").splice(0,1),format:"gif",altTag:n};s.push(i),s=E.a.database().ref("".concat(e.props.reciever,"/chats/").concat(e.props.sender,"/messages")),i={message:a,type:"recieved",time:Date(Date.now().toString()).split(" GMT").splice(0,1),format:"gif",altTag:n},s.push(i),e.props.closeGiphy()},e.state={gifsArray:[],query:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f()({url:"//api.giphy.com/v1/gifs/trending",responseType:"json",method:"get",params:{api_key:"5o3FJkFysfmiqM09a9Z3ifEWL0HqHhLB"}}).then((function(t){var a=Math.floor(19*Math.random()),n=t.data.data.slice(a,a+6);e.setState({gifsArray:n})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"gifSearch"},s.a.createElement("form",{action:"",onSubmit:this.search},s.a.createElement("label",{htmlFor:"gifSearchInput"},"Search in GIPHY: "),s.a.createElement("input",{type:"text",id:"gifSearchInput",value:this.state.query,onChange:function(t){e.setState({query:t.target.value})}}),s.a.createElement(v,{label:"Search"})),s.a.createElement("div",null,this.state.gifsArray.map((function(t,a){return s.a.createElement("button",{key:a,className:"gif",value:t.images.downsized.url,id:t.title,onClick:e.sendGif},s.a.createElement("img",{src:t.images.downsized.url,alt:t.title}))}))))}}]),t}(n.Component),N=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).toggleGiphySearch=function(){e.setState({giphyOpen:!e.state.giphyOpen})},e.state={giphyOpen:!1},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"giphyDiv"},s.a.createElement("button",{disabled:!this.props.chatting,onClick:this.toggleGiphySearch},"Add Gif ",s.a.createElement("i",{className:"fas fa-image","aria-hidden":!0})),this.state.giphyOpen&&this.props.chatting?s.a.createElement(k,{closeGiphy:this.toggleGiphySearch,sender:this.props.sender,reciever:this.props.reciever}):"")}}]),t}(n.Component),w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleSubmit=function(t){t.preventDefault();var a=E.a.database().ref("".concat(e.props.sender,"/chats/").concat(e.props.reciever,"/messages")),n={message:e.state.text,type:"sent",time:Date(Date.now().toString()).split(" GMT").splice(0,1),format:"text"};a.push(n),y(e.state.text,e.props.sender,e.props.reciever,e.props.nickname),e.setState({text:""})},e.state={text:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"chatFormDiv"},s.a.createElement(N,{sender:this.props.sender,reciever:this.props.reciever,chatting:this.props.chatting}),s.a.createElement("form",{className:"chatForm",action:"",onSubmit:this.handleSubmit},s.a.createElement("label",{htmlFor:"message",className:"visuallyHidden"},"Enter the text you want to send:"),s.a.createElement("textarea",{name:"message",id:"message",cols:"30",rows:"10",value:this.state.text,onChange:function(t){e.setState({text:t.target.value})},disabled:!this.props.reciever,placeholder:this.props.reciever?"Enter text to send":"Please first select a chat",required:!0}),s.a.createElement(v,{disabled:!this.props.reciever,label:"Send"})))}}]),t}(n.Component),I=a(15),C=a.n(I);var O=function(e){return s.a.createElement("div",{id:"recentMessages",className:"recentMessagesDiv"},s.a.createElement("div",{className:"chatHeader"},e.chattingWith&&s.a.createElement("img",{src:C.a,alt:"Placeholder image of a user"}),e.chattingWith?s.a.createElement("h3",null,e.chattingWith):s.a.createElement("h3",null,"Please select a conversation from the list on the left!")),s.a.createElement("ul",{className:"recentMessages"},e.messages.map((function(e,t){return s.a.createElement("li",{key:t,className:e.type},s.a.createElement("p",{className:"time"},e.time),"text"===e.format?s.a.createElement("p",{className:"message"},e.message):s.a.createElement("img",{src:e.message,alt:e.altTag}))}))))};var j=function(e){return s.a.createElement("li",{className:"friendButton"},s.a.createElement("button",{onClick:function(t){e.function(t.currentTarget.value,t.currentTarget.id)},value:e.name,id:e.uid},e.imgUrl?s.a.createElement("img",{src:e.imgUrl,alt:"A picture of ".concat(e.name)}):s.a.createElement("img",{src:C.a,alt:"The user has no picture"}),s.a.createElement("p",null,e.name)),s.a.createElement("button",{className:"deleteButton",onClick:e.deleteFunction,value:e.index},s.a.createElement("i",{className:"fas fa-trash-alt"})))},L=a(12);var T=function(e){return s.a.createElement("div",{className:"alert"},s.a.createElement("h3",null,e.title),s.a.createElement("p",null,e.message),s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){e.functionToClose()}},e.originalLabel),e.aditionalButton?s.a.createElement("button",{onClick:e.aditionalFunction},e.aditionalLabel):""))},A=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).addFriend=function(t){t.preventDefault();var a=[];e.state.openedChats.includes(e.state.nickname)||e.state.nickname===e.props.userNickname?e.setState({errorMessage:"You already have an opened chat with ".concat(e.state.nickname," or you are trying to chat with yourself"),error:!0}):d.database().ref().once("value").then((function(t){var n=t.val(),s=[];for(var i in n)if("generalConfig"!==i){a.push(i);var r=d.database().ref("".concat(i,"/settings/nickname"));s.push(r.once("value"))}Promise.all(s).then((function(t){var n=!1;t.forEach((function(s,i){s.val()===e.state.nickname?(n=!0,d.database().ref("".concat(a[i],"/chats")).once("value").then((function(t){var n=[],s=t.val();for(var r in s)n.push(r);n.length<5?(d.database().ref("".concat(e.props.userId,"/chats")).update(Object(L.a)({},a[i],{nickname:e.state.nickname,messages:""})),d.database().ref("".concat(a[i],"/chats")).update(Object(L.a)({},e.props.userId,{nickname:e.props.userNickname,messages:""}))):e.setState({errorMessage:"The user you are trying to reach has already 5 conversations opened.",error:!0})}))):i!==t.length-1||n||e.setState({errorMessage:"Looks like ".concat(e.state.nickname," doesn't have an account with us!"),error:!0})}))}))}))},e.state={nickname:"",openedChats:[],error:!1,errorMessage:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.database().ref("".concat(this.props.userId,"/chats")).on("value",(function(t){var a=[],n=t.val();for(var s in n)a.push(n[s].nickname);e.setState({openedChats:a})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,this.state.error&&s.a.createElement(T,{title:"Oops! There is a problem!",message:this.state.errorMessage,functionToClose:function(){e.setState({error:!1})},originalLabel:"Ok",resend:!1}),s.a.createElement("form",{className:"addFriendBar",action:"",onSubmit:this.addFriend},s.a.createElement("label",{htmlFor:"nickname"},"Enter nickname of a friend to start a conversation:"),s.a.createElement("input",{type:"text",id:"nickname",placeholder:"Enter nickname",value:this.state.nickname,onChange:function(t){e.setState({nickname:t.target.value})},required:!0}),s.a.createElement(v,{label:"Add",disabled:this.props.disabled})))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).select=function(e,t){var n=function(n){var s=[],i=n.val();if(null!=i){if(i.length)s.push(i);else for(var r in i)s.push(i[r]);s.length>50&&(s=s.slice(s.length-50,s.length))}a.setState({userId:a.props.userId,userEmail:a.props.userEmail,messages:s,chattingWithName:e,chattingWithUid:t,language:""});var l=document.querySelector(".recentMessages");l.scrollTo({top:l.scrollHeight,left:0,behavior:"smooth"})},s=d.database().ref("".concat(a.state.userId,"/chats/").concat(t,"/messages"));s.off("value",n),s.on("value",n),document.querySelector("#recentMessages").scrollIntoView({behavior:"smooth"})},a.deleteConversation=function(){var e=a.state.friends[a.state.messageToDelete].uid;d.database().ref("".concat(a.state.userId,"/chats/").concat(e)).remove().then((function(){})),d.database().ref("".concat(e,"/chats/").concat(a.state.userId)).remove().then((function(){})),e===a.state.chattingWithUid?a.setState({chattingWithName:null,chattingWithUid:null,deleteConfirmation:!1}):a.setState({deleteConfirmation:!1})},a.state={userId:e.userId,userNickname:e.name,userEmail:null,chattingWithName:null,chattingWithUid:null,languageToTransalte:null,friends:[],messages:[],language:"",userImg:null,deleteConfirmation:!1,messageToDelete:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;null!==this.state.chattingWithUid&&d.database().ref("".concat(this.state.chattingWithUid,"/settings")).once("value").then((function(t){e.setState({language:t.val().language})}));d.database().ref("".concat(this.state.userId,"/chats")).on("value",(function(t){var a=t.val(),n=[];for(var s in a)n.push({uid:s,name:a[s].nickname});var i=!1;n.forEach((function(t){t.uid===e.state.chattingWithUid&&(i=!0)})),i?e.setState({friends:n}):e.setState({friends:n,chattingWithName:null,chattingWithUid:null})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"chatPageContainer"},this.state.deleteConfirmation&&s.a.createElement(T,{title:"Please confirm before proceeding!",functionToClose:function(){e.setState({deleteConfirmation:!1})},message:"Are you sure you want to delete your conversation?",originalLabel:s.a.createElement("i",{className:"fas fa-times-circle iconButton deny","aria-label":"Deny delete option"}),aditionalButton:!0,aditionalFunction:this.deleteConversation,aditionalLabel:s.a.createElement("i",{className:"fas fa-check-circle accept","aria-label":"Confirm delete option"})}),s.a.createElement("div",{className:"listOfFriends"},this.state.friends.length<5&&s.a.createElement(A,{disabled:!this.state.userNickname,userId:this.state.userId,userNickname:this.state.userNickname}),s.a.createElement("ul",null,this.state.friends.map((function(t,a){return s.a.createElement(j,{key:t.uid,uid:t.uid,name:t.name,imgUrl:t.imgUrl?t.imgUrl:null,userNickname:e.state.userNickname,function:e.select,index:a,deleteFunction:function(t){e.setState({messageToDelete:t.currentTarget.value,deleteConfirmation:!0})}})})))),s.a.createElement("div",{className:"messagesAndTextContainer"},s.a.createElement("div",null,s.a.createElement("p",null,"Welcome"," ",s.a.createElement("span",null,this.props.name),"!"),s.a.createElement("p",null,"This is ",s.a.createElement("span",{className:"logo"},"interpreter!")," Text messaging without language barrier!")),s.a.createElement(O,{messages:this.state.messages,chattingWith:this.state.chattingWithName,userImg:this.state.userImg}),s.a.createElement(w,{language:this.state.language,sender:this.state.userId,reciever:this.state.chattingWithUid,nickname:this.state.userNickname,chatting:!!this.state.chattingWithName}))))}}]),t}(n.Component),F=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState(Object(L.a)({},t.target.id,t.target.value))},e.signIn=function(t){t.preventDefault();var a=e.props.signInAlert,n=e.state.email,s=e.state.password;E.a.auth().signInWithEmailAndPassword(n,s).then((function(t){var a=t.user.uid;E.a.database().ref("".concat(a,"/settings/language")).once("value").then((function(t){e.props.getLanguage(t.val())}))})).catch((function(e){a()}))},e.recoverPassword=function(t){t.preventDefault(),E.a.auth().sendPasswordResetEmail(e.state.emailToRecover).then((function(){e.setState({emailSent:!0})}))},e.googleSignIn=function(){var t=e.props.userIsNewFunction,a=new E.a.auth.GoogleAuthProvider;E.a.auth().signInWithPopup(a).then((function(e){var a=e.additionalUserInfo.isNewUser;t(a)}))},e.state={email:"",password:"",forgetPassword:!1,emailToRecover:"",emailSent:!1,google:!1},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"signIn"},s.a.createElement("form",{action:"",onSubmit:this.signIn},s.a.createElement("h2",null,"Sign In"),s.a.createElement("label",{htmlFor:"email"},"Enter email"),s.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange,value:this.state.email,required:!0}),s.a.createElement("label",{htmlFor:"password"},"Enter password"),s.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange,value:this.state.password,required:!0}),s.a.createElement(v,{label:"Sign in"})),s.a.createElement("button",{onClick:this.googleSignIn},"Google sign in ",s.a.createElement("i",{className:"fab fa-google","aria-hidden":!0})),s.a.createElement("button",{onClick:function(){e.setState({forgetPassword:!e.state.forgetPassword})}},"Forgot your password?"),this.state.forgetPassword&&s.a.createElement("form",{className:"recoverPassword",action:"",onSubmit:this.recoverPassword},this.state.emailSent&&s.a.createElement("p",null,"An email has been sent with the instructions to recover your password."),s.a.createElement("label",{htmlFor:"emailToRecover"},"Enter your email:"),s.a.createElement("input",{type:"email",id:"emailToRecover",onChange:this.handleChange,required:!0}),s.a.createElement(v,{label:"Recover password"})))}}]),t}(n.Component);var x=function(e){return s.a.createElement("div",{className:"language"},s.a.createElement("label",{htmlFor:"language"},"Select your language:  "),s.a.createElement("select",{name:"language",id:"language",onChange:e.function,defaultValue:"en",required:!0},e.languages.map((function(e,t){return s.a.createElement("option",{key:t,id:e.name,value:e.code},e.name," ")}))))},D=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).getLanguage=function(t){e.setState({language:t.target.value})},e.createUser=function(t){t.preventDefault();var a=e.props.signUpAlert,n=e.state.name;"guest"===n.toLowerCase().substring(0,5)?a():E.a.database().ref().once("value").then((function(t){var s=t.val(),i=[];for(var r in s)if("generalConfig"!==r){var l=E.a.database().ref("".concat(r,"/settings/nickname"));i.push(l.once("value"))}Promise.all(i).then((function(t){t.map((function(e){return e.val()})).includes(n)?a():E.a.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){var a={chats:!1,settings:{language:e.state.language,nickname:e.state.name,email:e.state.email}};E.a.database().ref("".concat(t.user.uid)).update(a),t.user.sendEmailVerification().then((function(){})),t.user.updateProfile({displayName:e.state.name})})).catch((function(){a()}))}))}))},e.handleChange=function(t){e.setState(Object(L.a)({},t.target.id,t.target.value))},e.state={email:"",password:"",name:"",language:"en",signedUp:!1},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"signUp",action:"",onSubmit:this.createUser},s.a.createElement("h2",null,"Sign up"),s.a.createElement("label",{htmlFor:"name"},"Enter nickname"),s.a.createElement("input",{type:"text",id:"name",maxLength:10,onChange:this.handleChange,value:this.state.name,required:!0}),s.a.createElement("label",{htmlFor:"email"},"Enter email"),s.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange,value:this.state.email,required:!0}),s.a.createElement("label",{htmlFor:"password"},"Enter password"),s.a.createElement("input",{type:"password",id:"password",minLength:6,onChange:this.handleChange,value:this.state.password,required:!0}),s.a.createElement(x,{languages:this.props.languages,function:this.getLanguage}),s.a.createElement(v,{label:"Sign up"}))}}]),t}(n.Component),P=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).signInGuest=function(t){t.preventDefault(),e.setState({isLoading:!0}),E.a.auth().setPersistence(E.a.auth.Auth.Persistence.NONE).then((function(){return E.a.auth().signInAnonymously().then((function(t){var a=t.user.uid;E.a.database().ref("/generalConfig").once("value").then((function(t){e.setState({userId:a});var n={chats:!1,settings:{language:e.state.language,nickname:"guest".concat(t.val().guestNumber),email:null,isGuest:!0}};E.a.database().ref("".concat(a)).update(n)}))})).then((function(){setTimeout((function(){e.setState({isLoading:!1})}),2e3)}))}))},e.getLanguage=function(t){e.setState({language:t.target.value})},e.state={email:"",password:"",name:"",language:"en",userId:"",isLoading:!1},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,this.state.isLoading&&s.a.createElement("div",{className:"loadingScreen"},s.a.createElement("div",{className:"lds-hourglass"})),s.a.createElement("form",{className:"guestSignIn",action:"",onSubmit:this.signInGuest},s.a.createElement("h2",null,"Sign up as Guest"),s.a.createElement("p",null,"Signing in as a guest means you won't be able to select your nickname and will only be able to  get access to your conversations while logged in. If you refresh the page you will automatically log out."),s.a.createElement("p",null,"When you log In you will recieve your guest name, use this to connect with other users. "),s.a.createElement(x,{languages:this.props.languages,function:this.getLanguage}),s.a.createElement(v,{label:"Sign in"})))}}]),t}(n.Component),W=function(){E.a.auth().signOut()};var M=function(e){return s.a.createElement("header",null,s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"headerMain"},s.a.createElement("h1",null,"Interpreter"),e.signedIn&&s.a.createElement("nav",null,s.a.createElement("button",{onClick:W},"Sign Out ",s.a.createElement("i",{className:"fas fa-sign-out-alt","aria-hidden":!0})),s.a.createElement("button",{disabled:!e.nickname,onClick:function(){e.onClickFunction()}},"Settings ",s.a.createElement("i",{className:"fas fa-cogs","aria-hidden":!0}))))))};var q=function(){return s.a.createElement("footer",null,s.a.createElement("p",null,"Made by Juan Acaiturri Copyright \xa9 2019 powered by Yandex Translate. "))},G=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).languagesSelection=function(t){e.setState({language:t.target.value})},e.applyChange=function(){E.a.database().ref("".concat(e.props.userUid,"/settings/")).update({language:e.state.language})},e.state={language:"en",currentLanguage:"English"},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.languages,a=this.props.userUid;E.a.database().ref("".concat(a,"/settings/language")).once("value").then((function(a){var n=t.filter((function(e){return e.code===a.val()}));e.setState({currentLanguage:n[0].name})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"settingsPage"},s.a.createElement("button",{className:"close",onClick:this.props.closeSettings},s.a.createElement("i",{className:"fas fa-times-circle","aria-label":"Close settings"})),s.a.createElement("h2",null,"Settings"),s.a.createElement("p",null,"Current language is set to: ",s.a.createElement("span",null,this.state.currentLanguage)),s.a.createElement("p",null,"Changing the language won't translate your old messages, only new messages will be recieved in the new selected language."),s.a.createElement("form",{action:"",onSubmit:this.applyChange},s.a.createElement(x,{function:this.languagesSelection,languages:this.props.languages}),s.a.createElement(v,{label:"Apply change"})))}}]),t}(n.Component);var B=function(e){return s.a.createElement("div",{className:"introduction"},s.a.createElement("p",null,"Welcome to ",s.a.createElement("span",{className:"logo"},"Interpreter!")),s.a.createElement("p",null,"The text messaging system where you don't have to worry about speaking the same language to have a conversation with other people!"),s.a.createElement("p",null,"Please create an account or sign in as a guest."),s.a.createElement("button",{className:"submitButton",onClick:e.functionToClose},"Start!"))},H=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).setupNicknameAndLanguage=function(t){t.preventDefault();var a=e.props.googleNicknameAlertFunction,n=e.state.nickname,s=n.toLowerCase().substring(0,5),i=e.state.language,r=E.a.auth().currentUser,l=e.props.updateNickname;"guest"===s?a():E.a.database().ref().once("value").then((function(t){var s=t.val(),c=[];for(var o in s)if("generalConfig"!==o){var u=E.a.database().ref("".concat(o,"/settings/nickname"));c.push(u.once("value"))}Promise.all(c).then((function(t){if(t.map((function(e){return e.val()})).includes(n))a();else{var s={chats:!1,settings:{language:i,nickname:n,email:r.email}};E.a.database().ref("".concat(r.uid)).update(s),r.updateProfile({displayName:n}),e.setState({nickname:n},(function(){l(n),setTimeout((function(){window.location.reload()}),1e3)}))}}))}))},e.state={nickname:"",language:"en"},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"googleSignIn"},s.a.createElement("h3",null,"Google Sign In"),s.a.createElement("form",{action:"",onSubmit:this.setupNicknameAndLanguage},s.a.createElement("p",null,"Please fill the following form in order to continue:"),s.a.createElement("label",{htmlFor:"nickname"},"Enter a nickname: "),s.a.createElement("input",{maxLength:10,type:"text",id:"nickname",value:this.state.nickname,onChange:function(t){e.setState({nickname:t.target.value})},required:!0}),s.a.createElement(x,{languages:this.props.languages,function:function(t){e.setState({language:t.target.value})}}),s.a.createElement(v,{label:"Save settings"})))}}]),t}(n.Component),V=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).getLanguage=function(t){e.setState({language:t})},e.state={signedIn:!1,userId:null,userEmail:null,name:null,language:null,verified:null,optionSelected:"signIn",languagesList:["english"],settingsStatus:!1,signInAlert:!1,verifyAlert:!1,introduction:"",nicknameAlert:!1,userIsNew:!1,isLoading:!0},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.auth().onAuthStateChanged((function(t){if(t&&e.state.userIsNew)t.updateProfile({displayName:""}),e.setState({name:null,signedIn:!0,email:t.email,userId:t.uid,isLoading:!1});else if(t&&t.emailVerified)e.setState({signedIn:!0,userId:t.uid,name:t.displayName,email:t.email,language:"",isLoading:!1});else if(t&&!t.emailVerified&&t.email)e.setState({verifyAlert:!0,isLoading:!1});else if(t&&t.isAnonymous){var a=d.database().ref("/generalConfig");a.once("value").then((function(n){e.setState({signedIn:!0,userId:t.uid,email:null,isLoading:!1,name:"guest".concat(n.val().guestNumber)}),a.update({guestNumber:n.val().guestNumber+1})}))}else e.setState({signedIn:!1,userId:null,introduction:!0,isLoading:!1})})),f()({method:"get",url:"https://translate.yandex.net/api/v1.5/tr.json/getLangs",responseType:"json",params:{key:"trnsl.1.1.20191120T174117Z.30abf07a083257c3.606e1a38fc565562205063e541cb970657ab2600",ui:"en"}}).then((function(t){var a=t.data.langs,n=[];for(var s in a)n.push({name:a[s],code:s});n=n.sort((function(e,t){return e.name<t.name?-1:e.name===t.name?0:1})),e.setState({languagesList:n})}))}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,this.state.isLoading&&s.a.createElement("div",{className:"loadingScreen"},s.a.createElement("div",{className:"lds-hourglass"})),s.a.createElement(M,{nickname:this.state.name,signedIn:this.state.signedIn,onClickFunction:function(){e.setState({settingsStatus:!e.state.settingsStatus})}}),s.a.createElement("main",null,s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"mainDiv"},this.state.introduction&&s.a.createElement(B,{functionToClose:function(){e.setState({introduction:!1})}}),this.state.nicknameAlert&&s.a.createElement(T,{title:"Oops! there was a problem!",functionToClose:function(){e.setState({nicknameAlert:!1})},message:"The nickname you are trying to register is already in used or the email you are trying to use has already been used by another user!",aditionalButton:!1,originalLabel:"Ok"}),this.state.verifyAlert&&s.a.createElement(T,{title:"An email has been sent to you!",functionToClose:function(){window.location.reload()},message:"Please verify your acount and refresh after! You should have recieved an email with the steps to follow!",originalLabel:"Ok",aditionalButton:!0,aditionalFunction:function(){d.auth().currentUser.sendEmailVerification()},aditionalLabel:"Resend email"}),this.state.signInAlert&&s.a.createElement(T,{title:"Oops! there was a problem!",functionToClose:function(){e.setState({signInAlert:!1})},message:"You have entered an incorrect email or password!",aditionalButton:!1,originalLabel:"Ok"}),(this.state.userIsNew||null===this.state.name)&&this.state.signedIn&&s.a.createElement(H,{googleNicknameAlertFunction:function(){e.setState({nicknameAlert:!0})},userUid:this.state.userId,updateNickname:function(t){e.setState({name:t})},userEmail:this.state.userEmail,languages:this.state.languagesList}),this.state.signedIn?s.a.createElement(U,{userId:this.state.userId,name:this.state.name,language:this.state.language,friendsVisible:this.state.friendsVisible}):s.a.createElement("div",{className:"options"},s.a.createElement("div",{className:"optionsButtons"},s.a.createElement("button",{onClick:function(t){return e.setState({optionSelected:t.target.value})},value:"signIn",className:"signIn"===this.state.optionSelected?"":"inactive",disabled:"signIn"===this.state.optionSelected},"Sign In"),s.a.createElement("button",{onClick:function(t){return e.setState({optionSelected:t.target.value})},value:"signUp",className:"signUp"===this.state.optionSelected?"":"inactive",disabled:"signUp"===this.state.optionSelected},"Sign Up"),s.a.createElement("button",{onClick:function(t){return e.setState({optionSelected:t.target.value})},value:"guestSignIn",className:"guestSignIn"===this.state.optionSelected?"":"inactive",disabled:"guestSignIn"===this.state.optionSelected},"Guest Sign In")),"signIn"===this.state.optionSelected?s.a.createElement(F,{userIsNewFunction:function(t){e.setState({userIsNew:t})},languages:this.state.languagesList,getLanguage:this.getLanguage,signInAlert:function(){e.setState({signInAlert:!0})}}):"signUp"===this.state.optionSelected?s.a.createElement(D,{function:this.getLanguage,languages:this.state.languagesList,signUpAlert:function(){e.setState({nicknameAlert:!0})}}):s.a.createElement(P,{languages:this.state.languagesList})),this.state.settingsStatus&&s.a.createElement(G,{userUid:this.state.userId,languages:this.state.languagesList,currentLanguage:this.state.language,closeSettings:function(){e.setState({settingsStatus:!e.state.settingsStatus})}})))),s.a.createElement(q,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.66d6e486.chunk.js.map