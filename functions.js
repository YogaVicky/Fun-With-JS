class user{
	constructor(online,accountType,name){
		this.online = online;
		this.accountType = accountType;
		this.name = name;
	}
}

const sendWelcomeMessageToUser = (user) =>{
    if (user.online) {
        if (user.accountType === 'normal') {
          console.log('Hello ' + user.name + '!');
        } else {
        console.log('Welcome back premium user ' + user.name + '!');
        }
    }
}

let firstUser = new user(true,'normal','James');
let secondUser = new user(false,'abnormal','Stuart');
let thirdUser = new user(true,'normal','Jofra');

sendWelcomeMessageToUser(firstUser);
sendWelcomeMessageToUser(secondUser);
sendWelcomeMessageToUser(thirdUser);