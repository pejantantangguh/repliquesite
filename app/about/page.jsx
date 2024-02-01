import TabsComponent from "../component/Tabs"

const evangelist = [
  {
    picture: '/koJaySmall.jpg',
    name: 'Mindjaja Tani',
    title: 'Senior Pastor',
    blurb: (
      <div>
        <p className="my-2">
          Born in a Christian family, Jaya was very familiar with the Bible and Christianity. However, his personal encounter with the Saviour happened while he was studying in Germany. Since then he gave himself for the work of Lord Jesus Christ. Just like he met his life Saviour in Germany, he also met his life companion there. They got married in 1987. After he finished his study in Civil Engineering they went back to Jakarta, Indonesia. <br />
        </p>
        <p className="my-2">
          Ps Mindjaja Tani (usually called Jaya) moved to Australia in 1991 with his family (wife and two very young sons). They resided in Melbourne and founded the Indonesian Campus Ministries, based on Swinburne University Hawthron Campus. The ministry grew rapidly and spread to other universities and campuses like Monash University (Caulfied and Clayton), RMIT, Melbourne University and Deakin University.
        </p>
        <p className="my-2">
          In 2004, after years of long prayer and in response to the late Ps Paul Chandra’s request (founder of Gereja Kristus Brisbane – GKB), Ps Jaya moved to Brisbane to take over the next baton. He was ordained by Ps Trevor Chandler, President of Christian Life Churches International, under which GKB ensconsed as the Senior Minister. Under the leadership of Ps Jaya, GKB experienced much needed changes.

        </p>
        <p className="my-2">
          First, the name changed to Replique to reflect more of the ministry we are called to, that is to make disciples of every nations. Replique comes from the word replica, we are indeed the replica of God, created in His image. This name change is also in line with the ministry or church in Melbourne, so we have Replique Brisbane and <a href="https://repliqueministry.org/" >Replique Melbourne.</a>
        </p>
      </div>)
  },
  {
    picture: 'bebeAnita.jpg',
    name: 'Bharata Gunawan (Bebe)',
    title: 'Pastor',
    blurb:
      (
        <div>
          <p className="my-2">
            Bharata Gunawan, also known as ‘Bebe’, is a man who is passionate on making an impact and strives to be a blessing to people around him.
          </p>
          <p className="my-2">
            By the grace of God, Bebe first encountered Jesus in 2001 during a winter camp that was held by this church. In 2005, he returned to Brisbane to study engineering. During this period, he came back to the church and since then he continues to be an active member of Replique Ministry, a place he now calls home.
          </p>
          <p className="my-2">
            In this closely knitted community, Bebe met Anita, his future wife. They had their wedding in 2012 and she is now the loving mother of two young children. Anita also encountered Jesus in Replique Ministry when she came to the church at the age of 17.
          </p>
          <p className="my-2">
            In 2010, Bebe and Anita started a small coffee shop in Brisbane CBD. Through this experience, God has blessed them and taught them to practice their faith through the business. God has since guided them to be a blessing for everyone around them.
          </p>
          <p className="my-2">
            In 2017, Bebe and Anita answered God’s calling to take the leadership baton from Ps Jaya and lead the ministry to a new phase. They pray and aim to change people’s lives through God’s love and the Gospel and to continue serving God and His church.
          </p>
        </div>
      )
  }
]

const ourBelieve = [{

}]

export default function About() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">Our <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-red-700">Pastors</span></h1>

      <TabsComponent evangelist={evangelist} />
      <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl my-2">Our <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-red-700">Believes</span></h2>

      <div className="mb-4 text-3xl text-gray-900 dark:text-white my-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"> English</span>
      </div>

      <p className="my-2">Replique is an Indonesian church, open to all who wants to worship and serve God together. We, as a Church that has a mission of “to reach and teach the generation for Christ” believes in:</p>
      <ul className="max-w-full space-y-1 list-disc list-inside primary-Co">
        <li>God as the creator of heaven and earth and all its contents.</li>
        <li>Man is God’s creation that falls into sin and has lost His glory.</li>
        <li>Man’s salvation is only by the grace of God, through faith in Jesus Christ.</li>
        <li>Jesus Christ is the Son of God, born of the virgin Mary, crucified, dead and buried, – then on the third day rise again from the dead, ascend to Heaven and sit on the right hand of God the Father.</li>
        <li>The work of the Holy Spirit, the third person of the Trinity God who leads the believer’s life into all truth, the baptism of the Holy Spirit, the gifts of the Holy Spirit for the make up of the Body of Christ, His church, and the importance of life that produces the fruits of the Holy Spirit.</li>
        <li>Bible with its Old Testament and New Testament, is the infallible Word of God and is written by the inspiration of the Holy Spirit, and is the ultimate supreme authority over all the norms and values ​​of life.</li>
        <li>Water baptism is the command of the Lord Jesus Christ to be done to the believers who repent, as well as the Holy Communion that is held by baptized believers.</li>
        <li>The fellowship of all believers in the holy church and am.</li>
        <li>Mission and Evangelism work are the tasks that the God’s church must accomplish on this earth until the Lord Jesus Christ comes again.</li>
      </ul>

      <div className="mb-4 text-3xl text-gray-900 dark:text-white my-5">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"> Bahasa Indonesia</span>
      </div>
      <p className="my-2">Replique adalah sebuah gereja berbahasa pengantar bahasa Indonesia yang terbuka untuk semua orang yang ingin berbakti dan melayani Tuhan bersama. Gereja yang mempunyai misi “to reach and teach the generation for Christ” percaya kepada:</p>
      <ul className="max-w-full space-y-1 list-disc list-inside primary-Co">
        <li>Allah sebagai pencipta langit dan bumi beserta segala isinya.</li>
        <li>Manusia adalah ciptaan Allah yang jatuh kedalam dosa dan telah kehilangan kemuliaan Nya.</li>
        <li>Keselamatan manusia hanya berdasarkan kasih karunia Allah, melalui iman kepada Yesus Kristus.</li>
        <li>Yesus Kristus adalah Anak Allah, yang lahir dari perawan Maria, disalibkan, mati dan dikuburkan,
          kemudian pada hari yang ketiga bangkit pula dari antara orang mati, naik ke Surga dan duduk disebelah kanan Allah Bapa.</li>
        <li>Pekerjaan Roh Kudus, oknum ketiga dari Allah Tritunggal yang memimpin kehidupan orang percaya ke dalam seluruh kebenaran, baptisan Roh Kudus, karunia-karunia Roh Kudus untuk pembangunan Tubuh Kristus yaitu gerejaNya, dan pentingnya kehidupan yang menghasilkan buah Roh Kudus.</li>
        <li>Alkitab. Perjanjian Lama dan Perjanjian Baru, adalah Firman Allah yang tanpa salah dan dituliskan oleh ilham Roh Kudus, serta merupakan otoritas tertinggi secara mutlak atas semua norma dan nilai hidup.</li>
        <li>Baptisan air adalah perintah Tuhan Yesus Kristus yang harus dilakukan terhadap orang yang percaya dan bertobat, demikian juga dengan perjamuan kudus yang harus dilakukan oleh orang-orang percaya yang telah dibaptis.</li>
        <li>Persekutuan dari semua orang percaya dalam gereja yang kudus dan am.</li>
        <li>Pekerjaan Misi dan Penginjilan adalah tugas yang harus diselesaikan gereja Tuhan di atas dunia ini sampai Tuhan Yesus Kristus datang kembali.</li>
      </ul>

    </div>
  )
}