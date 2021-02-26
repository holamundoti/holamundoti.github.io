const ipad = window.matchMedia("screen and (max-width: 1024px)");

const menu = document.querySelector(".menu");
const burgerButton = document.querySelector("#burger-menu");
// const closeMenu = document.querySelector(".menu-close-img");

ipad.addListener(validation);

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", hideShow);
  } else {
    burgerButton.removeEventListener("click", hideShow);
  }
}

validation(ipad);

function hideShow() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
}

// const linkReserve = document.querySelector('.link-reserve');
// const linkBuySession = document.querySelector('.link-buySession');
// const linkWeAre = document.querySelector('.link-weAre');
// const linkCoaches = document.querySelector('.link-coaches');
// const linkContact = document.querySelector('.link-contact');

// const nextClasses = document.querySelector('.next-classes-title');
// const finishedClasses = document.querySelector('.finished-classes-title');
// // const canceledClasses = document.querySelector('.canceled-classes-title'); comentado

// const tableNext = document.querySelector('.next-classes-table');
// const tableFinished = document.querySelector('.finished-classes-table');
// // const tableCanceled = document.querySelector('.canceled-classes-table'); comentado

// const bike = document.querySelectorAll('.room-place-link');
// const cancelBike = document.querySelector('.cancel');

// const menuUser = document.querySelector(".menu-user-container");
// const iconUser = document.getElementById("icon-user");

// const editPackage = document.querySelector(".package-edit");
// const cancelPackageChanges = document.querySelector(".package-cancel");

// const formBasicData = document.getElementById('basicData-form');
// const formCard = document.getElementById("form-CardData");
// const formShowData = document.getElementById("form-PaymentData");
// const security = document.querySelector(".security");

// const editProfile = document.querySelector(".edit-profile");
// const cancelProfileChanges = document.querySelector(".cancel-profile-changes");

// const cancelClass = Array.from(document.querySelectorAll('.table-info .cancel-class'));

// const adminCancelClass = Array.from(document.querySelectorAll('.admin-cancel-class'));
// const adminBtnCancel = document.querySelector('.table-bike-reserved .cancel');

// Conekta.setPublicKey('key_KJysdbf6PotS2ut2');

// var conektaSuccessResponseHandler = function(token) {
//   // var $form = $("#card-form"); cometado

//   $("#conektaTokenId").val(token.id);

//   document.getElementById("form-CardData").style.display = "none";
//   security.style.display = "none";
//   formShowData.style.display = "block";

//   var cardName = document.getElementById("name").value;
//   var cardNumber = parseInt(document.getElementById("card").value);
//   var userEmail = document.getElementById("userEmail").value;
//   var cardCVC = parseInt(document.getElementById("cardCVC").value);
//   var cardMonth = parseInt(document.getElementById("cardMonth").value);
//   var cardYear = parseInt(document.getElementById("cardYear").value);

//   document.getElementById("showName").innerText = cardName;
//   document.getElementById("showCard").innerText = cardNumber;
//   document.getElementById("showEmail").innerText = userEmail;
//   document.getElementById("showCVC").innerText = cardCVC;
//   document.getElementById("showMonth").innerText = cardMonth;
//   document.getElementById("showYear").innerText = cardYear;

//   //Inserta el token_id en la forma para que se envíe al servidor comentado
//   // $form.append($('<input type="hidden" name="conektaTokenId" id="conektaTokenId">').val(token.id)); comentado
//   // $form.get(0).submit(); //Hace submit comentado
// };

// var conektaErrorResponseHandler = function(response) {
//   var $form = $("#card-form");

//   alert(response.message_to_purchaser);
//   // $form.find(".card-errors").text(response.message_to_purchaser); comentado
//   // $form.find("button").prop("disabled", false); comentado
// };

// $(document).ready(function() {
//   $('#card-form').submit(function(e) {
//     e.preventDefault();

//     var $form = $("#card-form");

//     Conekta.Token.create($form, conektaSuccessResponseHandler, conektaErrorResponseHandler);
//   })
// })

// //jQuery para que genere el token después de dar click en submit comentado
// // $(function () { comentado
//   //   $("#card-form").submit(function(event) { comentado
//     //     var $form = $(this); comentado
// //     // Previene hacer submit más de una vez comentado
// //     $form.find("button").prop("disabled", true); comentado
// //     Conekta.Token.create($form, conektaSuccessResponseHandler, conektaErrorResponseHandler); comentado
// //     return false; comentado
// //   }); comentado
// // }); comentado

// ipad.addListener(validation);

// // function recorreAray(bike){ comentado
// //   var numerobike; comentado
// //   for (var b = 0; b < bike.length; b++) { comentado

// //   } comentado
// // } comentado

// for (var b = 0; b < bike.length; b++) {
//   bike[b].addEventListener("click", function () {
//     document.querySelector(".overlay-dialog").style.display = "block";
//     document.querySelector(
//       ".dialog-bike-number"
//     ).textContent = this.textContent;
//   });

//   // bike[b].addEventListener('click', (e) => { comentado
//   //   numberBike.innerText = ''; comentado
//   // }); comentado
// }

// if(cancelBike) {
//   cancelBike.addEventListener('click', (e) => {
//     document.querySelector('.overlay-dialog').style.display = 'none';
//   });
// }

// if(iconUser) {
//   iconUser.addEventListener('click', showUserMenu);
// }

// if(nextClasses) {
//   nextClasses.addEventListener('click', optNextActive);
// }

// if(finishedClasses) {
//   finishedClasses.addEventListener('click', optFinishedActive);
// }

// // if(canceledClasses) { comentado
//   //   canceledClasses.addEventListener('click', optCanceledActive); comentado
//   // } comentado

// if(editPackage) {
//   editPackage.addEventListener('click', (e) => {
//     e.preventDefault();

//     const planInfo = Array.from(document.querySelectorAll('.package-info'));
//     const planInfoP = Array.from(document.querySelectorAll('.package-p'));
//     const planInputs = Array.from(document.querySelectorAll('.form-manage-plan .form-inputs'));

//     editPackage.style.display = 'none';
//     document.querySelector('.package-delet').style.display = 'none';
//     cancelPackageChanges.style.display = 'block';
//     document.querySelector('.package-save').style.display = 'block';

//   for (var i = 0; i<planInfo.length; i++){
//     planInfo[i].style.display = 'none';
//     planInfoP[i].style.display = 'none';
//     planInputs[i].style.display = 'block';
//     planInputs[i].value = planInfo[i].textContent;
//     planInputs[i].required = true;
//   }
//   });
// }

// if(cancelPackageChanges) {
//   cancelPackageChanges.addEventListener('click', (e) => {
//     e.preventDefault();
//     const planInfo = Array.from(document.querySelectorAll('.package-info'));
//     const planInfoP = Array.from(document.querySelectorAll('.package-p'));
//     const planInputs = Array.from(document.querySelectorAll('.form-manage-plan .form-inputs'));

//     editPackage.style.display = 'block';
//     document.querySelector('.package-delet').style.display = 'block';
//     cancelPackageChanges.style.display = 'none';
//     document.querySelector('.package-save').style.display = 'none';

//     for (var i = 0; i<planInfo.length; i++){
//       planInfo[i].style.display = 'inline';
//       planInputs[i].style.display = 'none';
//       planInfoP[i].style.display = 'block';

//     }
//   });
// }

// if(formBasicData) {
//   formBasicData.addEventListener('submit', (e) => {
//     e.preventDefault();
//     formCard.style.display = 'block';
//     document.querySelector(".security").style.display = 'block';
//     document.getElementById('form-BasicData').style.display = 'none';
//   });
// }

// if(editProfile) {
//   editProfile.addEventListener('click', (e) => {
//     e.preventDefault();
//     var userInfo = document.querySelectorAll('.edit-user-profile .user-info');
//     var inputs = document.querySelectorAll('.edit-user-profile .form-inputs');

//     editProfile.style.display = 'none';
//     document.querySelector('.change-pass').style.display = 'none';
//     document.querySelector('.save-profile-changes').style.display = 'block';
//     document.querySelector('.cancel-profile-changes').style.display = 'block';
//     document.querySelector('.edit-user-profile .form-title').textContent = 'Modificar perfil';

//     for (var i = 0; i<userInfo.length; i++){
//       userInfo[i].style.display = 'none';
//       inputs[i].style.display = 'block';
//       inputs[i].value = userInfo[i].textContent;
//       inputs[i].required = true;
//     }

//   });
// }

// if(cancelProfileChanges) {
//   cancelProfileChanges.addEventListener('click', (e) => {
//     e.preventDefault();
//     var userInfo = document.querySelectorAll('.edit-user-profile .user-info');
//     var inputs = document.querySelectorAll('.edit-user-profile .form-inputs');

//     editProfile.style.display = 'block';
//     document.querySelector('.change-pass').style.display = 'block';
//     cancelProfileChanges.style.display = 'none';
//     document.querySelector('.save-profile-changes').style.display = 'none';
//     document.querySelector('.edit-user-profile .form-title').textContent = 'Tus datos';

//     for (var i = 0; i<userInfo.length; i++){
//       userInfo[i].style.display = 'block';
//       inputs[i].style.display = 'none';
//     }

//   });
// }

// for (var i = 0; i < cancelClass.length; i++) {
//   cancelClass[i].addEventListener('click', function () {
//     document.querySelector('.overlay-dialog').style.display = 'block';

//     const date = document.querySelectorAll('.date-class');
//     const busqueda = this;
//     const indice = cancelClass.indexOf(busqueda);

//     document.querySelector('.cancel-class-date').textContent = date[indice].textContent;

//   });

// }

// for (var i = 0; i < adminCancelClass.length; i++) {
//   adminCancelClass[i].addEventListener('click', function () {
//     document.querySelector('.overlay-dialog.admin').style.display = 'block';

//     const bikeNumber = document.querySelectorAll('.bike-number');
//     const bikeUser = document.querySelectorAll('.bike-user');
//     const busqueda = this;
//     const indice = adminCancelClass.indexOf(busqueda);

//     document.querySelector('.user-bike-reserved').textContent = bikeUser[indice].textContent;
//     document.querySelector('.number-bike-reserved').textContent = bikeNumber[indice].textContent;

//   });

// }

// if (adminBtnCancel) {
//   adminBtnCancel.addEventListener('click', (e) => {
//     document.querySelector('.overlay-dialog.admin').style.display = 'none';

//   });
// }

// function validation(event) {
//   if (event.matches) {
//     burgerButton.addEventListener('click', hideShow);
//     closeMenu.addEventListener('click', hideShow);
//     linkReserve.addEventListener('click', hideShow);
//     linkBuySession.addEventListener('click', hideShow);
//     linkWeAre.addEventListener('click', hideShow);
//     linkCoaches.addEventListener('click', hideShow);
//     linkContact.addEventListener('click', hideShow);
//   } else {
//     burgerButton.removeEventListener('click', hideShow);
//     closeMenu.removeEventListener('click', hideShow);
//     linkReserve.removeEventListener('click', hideShow);
//     linkBuySession.removeEventListener('click', hideShow);
//     linkWeAre.removeEventListener('click', hideShow);
//     linkCoaches.removeEventListener('click', hideShow);
//     linkContact.removeEventListener('click', hideShow);
//   }
// }

// validation(ipad);

// function hideShow() {
//   if (menu.classList.contains('is-active')) {
//     menu.classList.remove('is-active');
//   } else {
//     menu.classList.add('is-active');
//   }
// }

// function optNextActive() {
//   nextClasses.classList.add("is-active");
//   finishedClasses.classList.remove("is-active");
//   // canceledClasses.classList.remove('is-active'); comentado
//   tableNext.classList.add("is-active");
//   tableFinished.classList.remove("is-active");
//   // tableCanceled.classList.remove('is-active'); comentado
// }

// function optFinishedActive() {
//   nextClasses.classList.remove("is-active");
//   finishedClasses.classList.add("is-active");
//   // canceledClasses.classList.remove('is-active'); comentado
//   tableNext.classList.remove("is-active");
//   tableFinished.classList.add("is-active");
//   // tableCanceled.classList.remove('is-active'); comentado
// }

// // function optCanceledActive() { comentado
//   //   nextClasses.classList.remove('is-active'); comentado
//   //   finishedClasses.classList.remove('is-active'); comentado
//   //   canceledClasses.classList.add('is-active'); comentado
//   //   tableNext.classList.remove('is-active'); comentado
//   //   tableFinished.classList.remove('is-active'); comentado
//   //   tableCanceled.classList.add('is-active'); comentado
//   // } comentado

// function showUserMenu() {
//   if (menuUser.classList.contains("is-active")) {
//     menuUser.classList.remove("is-active");
//   } else {
//     menuUser.classList.add("is-active");
//   }
// }

// function showInputsPackage() {

// }
