import '../styles/global.css';
import styles from '../styles/Content.module.css';
import Web3 from '../assets/images/image-web-3-desktop.jpg'
import retroPC from '../assets/images/image-retro-pcs.jpg'
import topLaptops from '../assets/images/image-top-laptops.jpg'
import game from '../assets/images/image-gaming-growth.jpg'

const Content = () => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.Layout}>

          <div className={styles.box1}>
            <div className={styles.Image}>
              <img src={Web3}></img>
            </div>
          </div>

          <div className={styles.box2}>
            <h2>
              New
            </h2>
            <div className={styles.wrapper}>
              <div className={styles.newItem}>
                <h3>
                  Hydrogen VS Electric Cars
                </h3>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
              </div>
              <hr />
              <div className={styles.newItem}>
                <h3>
                  The Downsides of AI Artistry
                </h3>
                <p> What are the possible adverse effects of on-demand AI image generation?</p>
              </div>
              <hr />
              <div className={styles.newItem}>
                <h3>
                  Is VC Funding Drying Up?
                </h3>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
              </div>
            </div>
          </div>
          <div className={styles.box3}>
            <div className={styles.readMore}>
              <div className={`${styles.readItem} ${styles.large} ${styles.w1}`}>
                The Bright Future of Web 3.0?
              </div>
              <div className={`${styles.readItem} ${styles.w2}`}>
                <p>
                  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <div className={styles.btn}>
                  READ MORE
                </div>

              </div>




            </div>
          </div>
          <div className={styles.box4}>
            <div className={styles.suggested}>
              <div className={styles.suggestedItem}>
                <div className={styles.suggestedImg}>
                  <img src={retroPC} alt="Retro PC" />
                </div>
                <div className={styles.suggestedInfo}>
                  <div className={styles.suggestedNo}>01</div>
                  <div className={styles.suggestedHeading}>Reviving Retro PCs</div>
                  <div className={styles.suggestedDescription}>What happens when old PCs are given modern upgrades?</div>
                </div>
              </div>
              <div className={styles.suggestedItem}>
                <div className={styles.suggestedImg}>
                  <img src={topLaptops} alt="Top Laptops" />
                </div>
                <div className={styles.suggestedInfo}>
                  <div className={styles.suggestedNo}>02</div>
                  <div className={styles.suggestedHeading}>Top 10 Laptops of 2022</div>
                  <div className={styles.suggestedDescription}>Our best picks for various needs and budgets.</div>
                </div>
              </div>
              <div className={styles.suggestedItem}>
                <div className={styles.suggestedImg}>
                  <img src={game} alt="Retro PC" />
                </div>
                <div className={styles.suggestedInfo}>
                  <div className={styles.suggestedNo}>03</div>
                  <div className={styles.suggestedHeading}>The Growth of Gaming</div>
                  <div className={styles.suggestedDescription}>How the pandemic has sparked fresh opportunities.</div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content;