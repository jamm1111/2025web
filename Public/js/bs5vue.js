//vue 2.0

// var myObject=new Vue({
//     el: "#portfolio",
//     data: {Portfolio: []}
//     })
//     $.ajax({
//         url:"/portfolio",
//         method: "get",
//         dataType: "json",
//         success: function(data){
//             myObject.Portfolio = data;
//         }
//     })

//     var vueService = new Vue({
//         el: "#services",
//         data: {Services:[
//            {icon:'fa-shopping-cart', title:'E-Commerce', text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur porro laborum fuga repellat necessitatibus corporis nulla, in ex velit recusandae obcaecati maiores, doloremque quisquam similique, tempora aspernatur eligendi delectus! Rem.'},
//            {icon:'fa-laptop', title:'Responsive Design', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'},
//            {icon:'fa-lock', title:'Web Security', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'}
//         ]}
//     })
const { createApp, ref } = Vue;



var TwoDApp = createApp({
    setup() {
        return {
            TwoD: ref([])
        }
    }
}).mount("#twoDContainer");

$.ajax({
    url: "/TwoD",
    method: "get",
    dataType: "json",
    success: (result) => {

        TwoDApp.TwoD = result;
    }
})





var ThreeDApp = createApp({
    setup() {
        return {
            ThreeD: ref([])
        }
    }
}).mount("#threeDContainer");

$.ajax({
    url: "/ThreeD",
    method: "get",
    dataType: "json",
    success: (result) => {

        ThreeDApp.ThreeD = result;
    }
})


var contactApp = createApp({
    setup() {
        return {
            contact: ref([])
        }
    }
}).mount("#contactForm");

$.ajax({
    url: "/contact",
    method: "get",
    dataType: "json",
    success: (result) => {

        contactApp.contact = result;
    }
})
