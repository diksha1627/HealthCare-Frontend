import React from 'react'
import './Signup.css'
function Signup() {
  return (
    <div>
       <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="signup">
				<div class="signup__field">
					<i class="signup__icon fas fa-user"></i>
					<input type="text" class="signup__input" placeholder="User name"/>
				</div>
                <div class="signup__field">
					<i class="signup__icon fas fa-user"></i>
					<input type="email" class="signup__input" placeholder="Email"/>
				</div>
				<div class="signup__field">
					<i class="signup__icon fas fa-lock"></i>
					<input type="password" class="signup__input" placeholder="Password"/>
				</div>
				<button class="button signup__submit">
					<span class="button__text">Sign Up Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			{/* <div class="social-signup">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-signup__icon fab fa-instagram"></a>
					<a href="#" class="social-signup__icon fab fa-facebook"></a>
					<a href="#" class="social-signup__icon fab fa-twitter"></a>
				</div>
			</div> */}
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    </div>
  )
}

export default Signup
