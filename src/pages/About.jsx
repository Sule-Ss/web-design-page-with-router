import React from 'react'

const About = () => {
  return (
    <main>
    <section className="section2 section2-about">
        <p>Subscribe To Our Newsletter</p>

        <form action="#">
            <input type="email" name="email" id="email" required placeholder="Enter Email..."/>
            <button>Subscribe</button>
        </form>
    </section>

    <section className="section3-about">
        <nav className="nav1">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas exercitationem esse repellendus
                repellat quidem perferendis repudiandae culpa unde doloremque? Explicabo tenetur dolor, quisquam
                adipisci veritatis sequi cum eos eaque doloremque velit itaque. Officia dicta magnam at quam alias,
                iure a totam provident hic autem error ipsam sit mollitia modi asperiores expedita eos corrupti,
                excepturi laudantium voluptas dignissimos eaque rem aut tempora? Ab voluptas nam deleniti.</p>
            <p className="about-us-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eligendi id
                error debitis suscipit obcaecati commodi quidem, vitae nulla aut dolorem harum culpa possimus
                delectus at explicabo iste! Modi, ducimus, facere id iusto autem facilis accusamus praesentium
                perspiciatis enim eius voluptas quo qui, amet est illum placeat consequatur sapiente voluptatum
                nihil minima necessitatibus? Nemo possimus obcaecati cumque voluptas reprehenderit alias magnam
                excepturi doloribus, ipsum repudiandae iure? Dignissimos ex cupiditate at.</p>
        </nav>
        <nav className="nav2">
            <h4>What We Do</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ratione obcaecati vitae reprehenderit
                nam cum quibusdam amet consequuntur non quis! Eaque soluta molestias nostrum minima, veniam hic. Et
                rem quam laboriosam architecto animi totam id?</p>
        </nav>
    </section>

</main>
  )
}

export default About