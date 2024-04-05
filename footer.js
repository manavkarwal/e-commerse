const footerHTML = `<"footer class="section-footer">
<div class="footer-container container">
  <div class="content_1">
    <img src="./public/images/logo.png" alt="logo"/>
    <p>
      Welcome 
    </p>
    <!-- <img src="https://i.postimg.cc/Nj9dgj98/cards.png"  alt="cards" /> -->
  </div>
  <div class="content_2">
    <h4>SHOPPING</h4>
    <a href="#">Computer SCience</a>
    
   
  </div>
  <div class="content_3">
    <h4>Experience</h4>
    <a href="./contact.html">contact us</a>
    <a href="" target="_blank">payment</a>
    
  </div>
  <div class="content_4">
    <h4>NEWS</h4>
    <p>ye to latest news hai</p>
    <div class="f-mail">
      <input type="email" placeholder="your Email"/>
      <i class="bx bx-envelope"></i>
    </div>
    <hr />
  </div>
</div>
  <div class="f-design">
  <div class="f-design-txt">
    <p>Design and Code by manav</p>
  </div>
</div>
</footer>
`;


const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML)

