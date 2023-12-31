<h1>Use for laravel event loader</h1>
<ul>
	<li>At first call showLoader() function in your script area</li>
	<li>Then fire your event</li>
	<li>Then call hideLoader() function</li>
</ul>

<h1>Example</h1>
<code>
	showLoader();
    let res = await axios.post('/update-profile', postObj)
    hideLoader();
</code>

<p>Here at first load loader then fire event then loader hide</p>

<h2>Useing Technology</h2>
<ul>
	<li>HTML5</li>
	<li>CSS3</li>
	<li>JavaScript</li>
</ul>

<h1>Use for page loader</h1>
<p>Just Add This code in js file</p>
<code>
	document.addEventListener("DOMContentLoaded", function () {
  		showLoader();
  		// Simulate content loading
	  setTimeout(function () {
	    hideLoader();
	  }, 1000); // Adjust the time based on your needs
	});
</code>
<p>If you want you can customize this timing</p>

<h3>Thank You SO Much</h3>
<p>Md. Inzamam-Ul Huq</p>
<ul>
	<li>Facebook: www.facebook.com/developerinzams</li>
	<li>Facebook: www.youtube.com/c/developerinzams</li>
</ul>