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

export default function About() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Our <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-red-700">Pastors</span></h1>

      <TabsComponent evangelist={evangelist} />
    </div>
  )
}