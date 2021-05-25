
//套餐
// let storage = sessionStorage;

// function doFirst(){
//   if(storage['addItemList'] == null){
//     storage['addItemList'] = '';  //storage.setItem('addItemList','');
//   }

// //幫每一個Add Cart建立事件聆聽功能
//   let list = document.querySelectorAll('.addButton');  //list是陣列

//   for(let i = 0; i < list.length; i++){
//       list[i].addEventListener('click',function(){
//           let Info = document.querySelector(`#${this.id} input`).value;
//           addItem(this.id, Info);

//           alert($(".addMenu").parent('.c_set_content'));
//       });
//     }
// }

// function addItem(itemId,itemValue){
//   // alert(`${itemId} : ${itemValue}`);

//   let image = document.createElement('img');
//   image.src = 'img/clinic/' + itemValue.split('|')[0];

//   let title = document.createElement('addMenu');
//   title.innerText = itemValue.split('|')[1];

//   let price = document.createElement('addMenu');
//   price.innerText = itemValue.split('|')[2];

//   let newSet = document.getElementById('newSet');

//   //先判斷此處是否已有物件，如果有要先刪除
//   if(newSet.hasChildNodes()){
//       while(newSet.childNodes.length >= 1){
//         newSet.removeChild(newSet.firstChild);
//       }
//   }

//   //再顯示新物件
//   newSet.appendChild(image);
//   newSet.appendChild(title);
//   newSet.appendChild(price);
  

// }

// window.addEventListener('load', doFirst);

//加價購

// $(function(){
//   $('.plus_button').click(function () {
//     let plus = $('.plusContent').clone(); //[object]
    
    
//     for(let i = 0; i < plus.length; i++){
//     //   let plus_1 = [];
//     //   let plus_2 = [];
 
//       if(plus_1.length != 0){
//         $('#plus_1').append(`${plus[i]}`); 
//       }else{
//         $('#plus_2').append(`${plus[i]}`); 
//       }
//     }
//     //   // plus1[i].append(`${plus1}`);
//     // }

//     // $('#plus_1').append(`${plus1}`); 
//     // console.log(plus[0]);
//     // console.log(plus_1.childNodes.length);
//   });
// });


// var arr = [1,2,3];
// var copy = Object.assign([], arr);
// console.log(copy); // [1,2,3]
// let copy = Object.assign([], plus1);
//     console.log(copy);
  //   // $("plus[i]").wrap("<ul></ul>");


  

  Vue.component('c_set_1',{
    template: `
    <div class="c_set">
    <div class="c_set_title">
      <img src="./img/clinic/checkdog@2x.png" class="mask_dog">
      <h3>快速篩檢套餐<br>特價3000元</h3>
    </div>
    <div class="c_set_content">
      <ul>
        <li class="alpha">01</li>
        <li class="item">基礎理學檢查</li>
      </ul>
      <ul>
        <li class="alpha">02</li>
        <li class="item">重大傳染病篩檢</li>
      </ul>
      <ul>
        <li class="alpha">03</li>
        <li class="item">腎臟病早期篩檢</li>
      </ul>
      <ul>
        <li class="alpha">04</li>
        <li class="item">血液常規</li>
      </ul>
      <ul>
        <li class="alpha">05</li>
        <li class="item">血糖檢測</li>
      </ul>
      <ul>
        <li class="alpha">06</li>
        <li class="item">血清蛋白質檢測</li>
      </ul>
      <ul>
        <li class="alpha">07</li>
        <li class="item">腎指數檢測</li>
      </ul>
      <ul>
        <li class="alpha">08</li>
        <li class="item">肝指數檢測</li>
      </ul>
    </div>
    <div class="addMenu">
      <button @click="content='c_set_1'" id="A1001" class="addButton">加入
      <input type="hidden" value="checkdog@2x.png|快速篩檢套餐|3000元"></button>
    </div>
  </div>
    `,
});

new Vue({
            el: '#c_set',
            data: {
                content: 'c_set_1', 
            },
        });  