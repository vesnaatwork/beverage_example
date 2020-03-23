//samo prezentovanje ispisivanje stvari sta se desilo
//informativne poruke kreiran su objekti, nakon akcije
//greske
//warning
//success


//pub sub pattern
//samo formatira poruke za izlaz i komunicira sa consolom
// function pubSub() {
//     const subscribers = {}
//     function publish(eventName, data) {
//         if (!Array.isArray(subscribers[eventName])) {
//           return
//         }
//         subscribers[eventName].forEach((callback) => {
//           callback(data)
//         })
//       }
    
//     function subscribe(eventName, callback) {
//         if (!Array.isArray(subscribers[eventName])) {
//           subscribers[eventName] = []
//         }
//         subscribers[eventName].push(callback)
//       }
    
//       function subscribe(eventName, callback) {
//     if (!Array.isArray(subscribers[eventName])) {
//       subscribers[eventName] = []
//     }
//     subscribers[eventName].push(callback)
//   }

//   function showMeTheMoney(money) {
//     console.log(money)
//   }
  
//   const ps = pubSub()
//   ps.publish('show-money', 1000000)
//   ps.subscribe('show-money', showMeTheMoney)
//       return {
//         subscribe,
//         publish
//       }  

}
