var tutoringResumes = [
  {
      profile: '<img style="width: 100px; height: 120px; border-radius: 5px;" src="./profile-pics/english-teacher.jpg" >',
      name: "Ms. Noor",
      degree: "Bachelor",
      experience: "Teaches high school students"
  },

  {
      profile: '<img style="width: 100px; height: 120px; border-radius: 5px;" src="./profile-pics/math-teacher.png" >',
      name: "Ms. Mike",
      degree: "Bachelor",
      experience: "taught for 10 years"
  },

  {
      profile: '<img style="width: 100px; height: 120px; border-radius: 5px;" src="./profile-pics/ physics-teacher.jpg" >',
      name: "Ms. Henry",
      degree: "Bachelor",
      experience: "5 years of teaching high school students"
  }
]


tutoringResumes.forEach(tutor => {
  var div = document.querySelector('div')

  div.innerHTML = div.innerHTML + `
        <div class = "menu" >
          <span class = "divimg">
          ${tutor.profile}
          </span>
          <br>   Name:  ${tutor.name } <br> Degree: ${tutor.degree} <br> Experience:  ${tutor.experience } <br>
        </span>
          <span>
          </div>

      
`
})