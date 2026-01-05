<p>JavaScript Developer</p>
    </div>
  </section>
  <footer>Contact us at: team@example.com</footer>
  <script src="script.js"> </script>
</body>
</html>
Script.js
document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('mouseenter', () => {
      profile.style.backgroundColor = '#f0f0f0';
    });
    profile.addEventListener('mouseleave', () => {
      profile.style.backgroundColor = 'white';
    })
  });