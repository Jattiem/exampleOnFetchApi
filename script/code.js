
let html = ''
// let result
async function getData() {
    let collections =
    await fetch('https://randomuser.me/api?results=3');
    let data = collections.json();
    return data;
}
// Display
async function displayData() {
    let data = await getData();
    data.results.forEach(item => {
        console.log(item);
       let result = `
        <div class="card" style="width:400px">
        <div class="card-body">
        <img class="card-img-top" src="${item['picture'].large}" alt="Card image" style="width:180px">
        <br>
          <h5 class="card-title" style="width:18rem;">
          <div class="myDIV"><i class="bi bi-file-person-fill"></i></div>
          <div class="hide">${item['name'].first}</div>
          <br>
          <div class="myDIV"><i class="bi bi-gender-trans"></i></div>
          <div class="hide">${item['gender']}</div>
          <br>
          <div class="myDIV"><i class="bi bi-envelope-fill"></i></div>
          <div class="hide">my email is ${item['email']}</div>
          <br>
          <div class="myDIV"><i class="bi bi-telephone-outbound-fill"></i></div>
          <div class="hide"> ${item['cell']}</div>
         </h5>
        </div>
      </div>
        `
        html += result
    });
    let container = document.querySelector('.container');
    container.innerHTML = html
}
displayData().
catch(e =>{
    console.error('Please try again later');
})
