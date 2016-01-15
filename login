<section id="contact" class="ease_in">
    <div class="main_container">
        <h3 class="heading">Sign in or Create an Account</h3>
        <div class="row contact_row">
            <div class="col-md-6 contact_col">
                <h4 class="create_heading">I have a Retail Maverick Account</h4>
                <form accept-charset="UTF-8" action="http://www.mallmaverick.com/retail_users/sign_in" id="new_retail_user" method="post">
                    <input name="utf8" type="hidden" value="&#x2713;" />
                    <input name="authenticity_token" type="hidden" value="P0nmxlvg3RBtq+qiqAgZYaaqRfNOitZS51zIKuNELyM=" />
                    <label class="custom_label" for="email">Email</label>
                    <input type="text" id="email" name="retail_user[email]" class="form-control custom_control login_control" required />
                    <label class="custom_label" for="password">Password</label>
                    <input type="password" id="password" class="form-control custom_control login_control" name="retail_user[password]" />
                    <a href="http://www.mallmaverick.com/retail_users/password/new" target="_blank">Forgot your password?</a>
                    <br /><br />
                    <label class="custom_label">
                        <input type="checkbox" name="retail_user[remember_me]" />
                        Keep me logged in
                    </label>
                    <br />
                    <br />
                    <input type="submit" value="Login" class="send_btn" />
                </form>
            </div>
            <div class="col-md-6 hidden_phone">
                <h4 class="create_heading">Create an Account for Retail Maverick</h4>
                <a href="/#signup" class="send_btn">Sign Up Now!</a>
                <p class="contact_desc">Register and start managing your stores with the most convenient and efficient retail system.</p>
                <p class="contact_desc">
                    <img src="http://assets.codecloudapp.com/sites/568ad9ee6e6f643bf4000000/image/png/1452115727000/checkmark.png" class="" alt="check mark">
                    Create and send your promotions / campaigns to all your retail locations all at once, efficently.
                </p>
                <p class="contact_desc">
                    <img src="http://assets.codecloudapp.com/sites/568ad9ee6e6f643bf4000000/image/png/1452115727000/checkmark.png" class="" alt="check mark">
                    Share your content socially on Facebook and Twiiter all from one place!
                </p>
                <p class="contact_desc">
                    <img src="http://assets.codecloudapp.com/sites/568ad9ee6e6f643bf4000000/image/png/1452115727000/checkmark.png" class="" alt="check mark">
                    Communicate to all your retail outlets quickly and easily.
                </p>
            </div>
        </div>
    </div>
    
    <a href="uber://?action=setPickup&pickup[latitude]=37.775818&pickup[longitude]=-122.418028&pickup[nickname]=UberHQ&pickup[formatted_address]=1455%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103&dropoff[latitude]=37.802374&dropoff[longitude]=-122.405818&dropoff[nickname]=Coit%20Tower&dropoff[formatted_address]=1%20Telegraph%20Hill%20Blvd%2C%20San%20Francisco%2C%20CA%2094133&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d"></a>
</section>
<script>
    $(document).ready(function(){
        init();
    });
</script>