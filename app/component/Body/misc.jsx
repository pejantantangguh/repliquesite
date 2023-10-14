import Image from 'next/image';

export default async function Home() {
  const feed = await getInstagramData();
  const images = feed.data
  return (
    <main className="flex min-h-screen flex-row justify-between p-24">
      <div className="flex-1 mr-8">
        <Image src="/logo-REPLIQUE-FINAL.png"
          alt='replique logo here'
          width={125}
          height={125} />
        <div className='text-2xl mt-4'> Who we are </div>
        <div className='text-base'>
          We are Replique Ministry Brisbane and we are an Indonesian community church located in East Brisbane.
          <br />
          We believe that as a church, we should be the replica of God, created in His image who serve and create impacts to people around us.
        </div>
      </div>
      <div className='flex-1'>
        Instagram content here
        <div class="grid grid-cols-1 md:grid-cols-3 max-w-3xl px-4 sm:px-6 gap-4">
          {images && images.map((image) => {
            if (image.media_type == 'IMAGE') {
              return (
                <a key={image.id} href={image.permalink}>
                  <img src={image.media_url}  class="object-cover"/>
                </a>
              )
            }
            // else if (image.media_type == 'VIDEO') {
            //   return (
            //     <a key={image.id} href={image.permalink}>
            //       <video 
            //         src={image.media_url} 
                    
            //         class="object-cover" 
            //         autoPlay=''/>
            //     </a>
            //   )
            // }
          })}
        </div>
      </div>
    </main>
  )
}


async function getInstagramData() {
  const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,permalink&access_token=${process.env.IG_Token}`

  const data = await fetch(url);
  const feed = await data.json();
  return feed;
}

// https://www.youtube.com/watch?v=kLFSTaCqzdQ