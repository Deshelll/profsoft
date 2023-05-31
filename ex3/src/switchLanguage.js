function toggleLanguage() {
    
    var aboutMeTitle = document.querySelector('.cards_title');
    var aboutMeText = document.querySelector('.cards_text');
    
    if (aboutMeTitle.textContent === 'About me') {
        aboutMeTitle.textContent = 'Обо мне';
        aboutMeText.innerHTML = 
            `Привет, я Денис – дизайнер UX/UI из Минска.<br/>
            Мне интересен дизайн и все, что с ним связано.<br/><br/>

            Я учусь на курсах "Дизайн веб и мобильных интерфейсов" в IT-Academy.<br/><br/>

            Готов реализовывать отличные проекты<br/>
            с замечательными людьми.`;
    } else {
        aboutMeTitle.textContent = 'About me';
        aboutMeText.innerHTML = 
            `Hi, I'm Denis – UX/UI designer from Minsk.<br/>
            I'm interested in design and everything connected with it.<br/><br/>

            I'm studying at courses "Web and mobile design<br/>
            interfaces" in IT-Academy.<br/><br/>

            Ready to implement excellent projects<br/>
            with wonderful people.`;
    }
}