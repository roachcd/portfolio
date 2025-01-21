<template>
  <div class="home">
    <div class="post">
      <div class="header">
        <h1>Survivor Rally</h1>
      </div>
      <div>
        <p>
          Survivor Rally is a robust platform designed to streamline rally management for the non-profit Survivor Rally.
          <br><img class="postImg" src="@/assets/SRScreenShots/UserHome.png" /><br>
          It empowers administrators with comprehensive tools to manage teams, posts, donations, and various other aspects of the rally.
          <br><img class="postImg" src="@/assets/SRScreenShots/AdminHome.png" /><p class="subtext">Donation data in screen shot is incorrect to provide privacy</p><br>
          The platform also provides users with personalized access to log in, share updates on their profiles, 
          and engage with activities from other participants.
          <br><img class="postImg" src="@/assets/SRScreenShots/UserProfile.png" /><br><br>
          Access to the Survivor Rally website is exclusively available to registered rally participants.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SurvivorRally',
  data(){
    return{
    }
  },
}
</script>

<style scoped>
.header{
  position: relative;
  color: black;
  font-family: Helvetica;
}
.post{
  position: absolute;
  display: block;
  margin: 10%;
  margin-top: 100px;
}
.postImg{
  width: 70%;
  margin: 20px 0px 20px 0px;
}
.subtext{
  font-size: 10px;
  margin: 0px;
  margin-top: -40px;
}
</style>