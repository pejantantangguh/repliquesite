import '@/styles/global.css'
import { Navbar } from '@/app/component/navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function christmas2023() {
    return (
        <div>
            <Navbar />
            <main className='flex-auto relative py-20 sm:pb-24 sm:pt-25 mt-5 lg:px-8 px-2' id='#top'>
                <div className="relative overflow-x-auto">
                    <div className='px-6 py-4'>  <Link href="#TimothyOng"> The Legend of Christmas by Timothy Ong </Link> </div>
                    <div className='px-6 py-4'>  <Link href="#AmosAtmadja"> Stumpy the Brave Elf by Amos Atmadja </Link> </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Service Schedule
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Welcome
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Video: Christmas Kids Part 1
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    The Meaning of Christmas for Me (1)
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-12 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Song: Angel We Have Heard on High
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-12 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Song: Ajaib Kau Tuhan
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-12 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Song: For All You've Done
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Video: Christmas Kids Part 2
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Item: Joy to the World
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Bible Verse Reading
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-12 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Song: Oh Come, All Ye Faihful
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-12 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Song: Oh Holy Night
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-12 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Song: In Christ Alone
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    The Meaning of Christmas For Me (2)
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Sermon
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Item: Silent Night
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-12 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Song: We Wish Merry Christmas
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Video: Christmas Kids Part 3
                                </th>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Closing
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='px-6 py-8 text-gray-900' id="TimothyOng">
                    <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">The Legend of Christmas</h1>

                    <div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                        <p class="mb-8 text-lg font-normal"> 
                        “Incoming!”, Santa screamed as a wall of fire surrounded the sleigh. <br />
                        “Man the cannons!” I stumbled across the sleigh deck to a canon,
                        my sweaty palms drenching the rope handles. Fire the canons Bang, Bang, Bang.  We all shot at the trolls riding dragons.
                        “They're coming aboard! Get down!”, Santa yelled as the sleigh zoomed down earth's atmosphere. </p>
                        <blockquote class="mb-3">
                            <Image src={'/santasleigh-burning.jpeg'} 
                            height={200}
                            width={200}/>
                        </blockquote>
                    </div>
                    <p className='mb-8 text-lg font-normal'>
                        “Prepare the parachutes!” Santa commanded. “They're gone sir! The demonic dragons were right behind us. We've lost engine one! There goes engine two, we were gonna crash.”  <br />
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “Ryan, dragons on your left! Chuck more trolls on your right!” screeched Maisie. <br />

                        They've got Santa! Prepare to bail! Boom! <br />
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        A few days later. Beep beep beep (heart monitor). White curtains, beeping machines “Where am I?” I had no idea how I got here but there I was, on a white bed in the middle of a room surrounded by people in blue uniforms. My bones felt broken, my head was bulging, and I couldn't feel my legs.  I sat up to see myself plugged into many machines a breathing mask on my face, a stretcher underneath my body and a stone hard cast on my arm.  I knew where I was. I was at the hospital, but not the normal elf hospital - the human hospital. <br />
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “Where's Santa?!!!” I yelled. Every person in the room looked at me, then started laughing. “Santa's not real.  You must have hit your head pretty hard”, said one of them and continued chuckling.
                    </p>

                    <p className='mb-8 text-lg font-normal'>“He is real!” I yelled back.  “I've been his number one elf along with my two best friends, Maisie and Chuck for the past ten years!”  </p>

                    <p className='mb-8 text-lg font-normal'>“Hey! Where are Maisie and Chuck?” I screeched at a man in a blue uniform.
                        “It's okay your friends are in the room next to you”.
                    </p>

                    <p className='mb-8 text-lg font-normal'>I jolted up and dragged the machines attached to me to the neighbouring rooms and there they were both on white beds sitting up and looking around. Chuck, Maisie, I ran to them both. “How did we get here?”, they simultaneously said. Which made me realise I don't know how we got here.
                    </p>

                    <p className='mb-8 text-lg font-normal'>Just then a man in a white coat burst in. “Hello”, he said.  “My name is Doctor Edward and I'll be asking you a few questions”.  Helplessly we agreed to answer them. “What do you remember from the crash?” The crash I thought that's what happened. I told the doctor everything. I told him how I was Santa's elf first in command and we were taking the sleigh on a test drive for Christmas. It was all well until we saw something in the distance, a large ship. Painted black with skulls all over it and it had a strange purple glow. Before we knew it the ship had released some sort of purple gas blocking our field of view. We could see nothing at all. Then it happened trolls riding dragons shot walls of fire at us burning our engines soon enough they all started boarding our sleigh they took out all our reindeers and the sleigh started to fall.  Then they took Santa and left us here to crash.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “Yeah, let's put him for x-ray he's gone crazy”, Doctor Edward said. “No! I have not gone crazy we're leaving!” I grabbed Chuck and Maisie and stomped out of the room.
                        <br />
                        When we noticed something.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        Outside the hospital was a building surrounded by a strange purple glow the same as we saw on the ship.  We knew it had to have a link to the ship and we needed to find Santa. “You ready?” I said to the others.  “We were born ready!” they replied.  We walked over to the building and noticed there was no door something wasn't right. There was no obvious way in. So there must be another way, a secret way possibly.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        We got on our hands and knees and crawled around the building looking for an open window or a trapdoor when we found something a manhole. The cover was loose, and it was right next to the building - this had to be the entrance. We stripped of the manhole cover and jumped in to find a massive room with skulls all over it. We knew we were in the building.  We slowly walk around and spot a staircase.  We sprint up it to see Santa behind bars surrounded by a wall of trolls and dragons. We need to save him I told the others we need a plan.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        Just then a large man walked in surrounded with the purple glow we saw before. “Well, well, well”.  He said, “If it isn't Santa Clause”.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “What are you going to do to me?” Santa said.  “Absolutely nothing!” the man replied.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “Who are you?!!!” Santa shouted at the man.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “I am shadow Santa”, the man said.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “I am a Santa from a parallel universe, and I have come to conquer you. In this universe you give presents and give life, but I steal life!”
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “No! Don't do this”, Santa said
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “Christmas is a time of life - not a time of death. What are you gonna do about it, Shadow?” Santa said,” You're stuck.”
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        Then shadow Santa cackled and left the room.  It was time for action but we needed weapons.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        Over there Chuck whispered he had found a barrel labeled weaponry.  “It says weaponry.  It has to be weaponised,” Chuck said.  One by one, we army crawled around the floor and took turns leaping behind poles.  Sometimes being short has its advantages.  We scratched open the barrel and find 3 long sharp katanas perfect to take out the guards and pry open the cell.
                    </p>


                    <p className='mb-8 text-lg font-normal'>
                        3 2 1.  We all jump out and slash our weapons through the trolls within 3 seconds.  It's chaos.  An alarm goes off.  Dragons and trolls rush the room all coming for us.  But being short has its advantages we all jump and none of them manage to grab us.  They end up tangling themselves in a pile jump.  We all jump onto a bar above us as more dragons flood the room and start scratching their own trolls.  In all the chaos, we launch Maisie to the cell of Santa above our heads a clip him free.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        Chuck and Maisie both take a jab at shadow Santa but he uses some sort of force to push it back into them. “You silly elves!” He bellows,” Your no match for my shadow essence”.  Shadow essence was illegal every where in the world it caused people to destroy and kill. We had to find the source.  I noticed the bright beam was coming from a little tube tied around his neck.  I needed to destroy it.  I sprinted around him taking occasional jumps and slides to wear him out until finally I jump up and take a jab straight through his chest.
                        In pain he drops to the floor, and I strip the necklace off him. I destroy the essence and tell him.” It's over!” and I shoot a jab through his head.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        I carry my friends and Santa out back to the hospital.  I sit down waiting for them to wake up and think,” How did shadow Santa get here? Was there some sort of portal?”  I knew this was far from over, more and more shadow realm creatures would attack.  Just then I see Chuck Maisie and Santa sit up.  They're alive.  If the shadow realm ever attacks again, we'll be here for it.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        The end.
                    </p>


                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link href="#top" class='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'>
                            Back to top
                        </Link>
                    </div>
                </div>

                <div className='px-6 py-8 text-gray-900' id="AmosAtmadja">
                    <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">Stumpy The Brave Elf</h1>
                    <p className='mb-8 text-lg font-normal'>
                        “GO!” Santa yelled as the reindeer's legs started to flutter with shiny dust. “Umm, what is that?” One of the elves squeaked nervously.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “I'm sure, it's just a-AAAAAHHHH!” Santa screamed.  The sleigh crashed into a huge iceberg and sunk down as Santa, the elves and the reindeers all drowned in the cold, icy water.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “What is this?” A green figure asked himself.  “Santa's sleigh! This could come in handy!”
                    </p>

                    <h3 className="mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900">
                        15 Years Later
                    </h3>

                    <p className='mb-8 text-lg font-normal'>
                        “I can't be seen! I can't be seen!” Stumpy kept reminding himself, he'd been living like this since the incident that occurred.  Santa, the elves, and the reindeers all crashed into an iceberg that sunk into the Grinch's evil lair.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        Stumpy managed to survive it.  Being an elf could come in handy sometimes.  Although the other elves were too shocked on what was happening, they forgot that they could teleport!  And so, all the other elves had drowned in the cold, icy water.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “It's time to steal Christmas! PROPERLY!”
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        The Grinch boomed as he held something high in his furry, green hands.  “With my newly found, Multidimensional watch, I'll be able to steal Christmas in other dimensions!”
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        Stumpy was in shock, he had seen other inventions by the Grinch, but those were nothing compared to this.  This could permanently end Christmas forever! Stumpy had been sneakily hiding in the Grinch's lair for 15 years straight, by stealing food and water, but it was time for him to do really do something.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        As soon as the Grinch pressed the button for dimensional travel, Stumpy leaped in and stole the watch.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “HEY! COME BACK HERE YOU ELF!”
                    </p>


                    <p className='mb-8 text-lg font-normal'>
                        But it was too late, Stumpy had whooshed off into a random dimension to warn people about the event that was to occur.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “AAAAGGGHHH!” Stumpy yelled, purple and yellow ashes were causing him never-ending epilepsy.  “Oof!” Stumpy said wearily.  He looked up from the hard concrete floor of a grey, boring city.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “Everyone! Listen up! I'm from a different dimension.  I'm here to warn you about the Grinch, he's coming here to destroy Christmas!”
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “What's Christmas?” a townsman asked.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        Stumpy was shocked.  “You…don't have Christmas in your dimension?”  He questioned.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “No, what is it?” the president asked.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “You know what?  Never mind, I don't have to do this dimension”.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        Stumpy walked off to the corner of the city and started to examine the watch since he didn't get to see what it could do.  As he was looking at the highly programmed watch, a green button caught his eye, reading ‘send message to all dimensions'.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “Perfect!” Stumpy exclaimed.  He set the watch down and started to record a message.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “ATTENTION, THE EVIL MASTERMIND, GRINCH IS GOING TO DESTROY CHRISTMAS FOREVER!  PLEASE START EMERGENCY EVACUATIONS AND GET TO A SAFE PLACE”
                    </p>

                    <h3 className="mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900">
                        BACK AT THE LAIR
                    </h3>

                    <p className='mb-8 text-lg font-normal'>
                        “OH, COME ON!” The Grinch yelled angrily.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “Wait, OF COURSE!”  He ran to his elevator, put in a code, did an eye scan, went down to the Mariana Trench, and opened a microwave.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “Always have a backup they say”.  WHOOSH!
                    </p>

                    <h3 className="mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900">
                        5 DESTRUCTIVE DIMENSION LATER.
                    </h3>

                    <p className='mb-8 text-lg font-normal'>
                        “How did you get here?!” Stumpy yelled.  “Why? Just a backup watch!” The Grinch said mischievously.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “Now, you've messed with me for the first and last time! Robots, ATTACK!”   He yelled.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “AAAAHHHHHH!!!!!” Stumpy screamed.  It looked it was the end for the shy, little elf.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “C-O-M-E   O-N   O-U-T-!”, the robots beeped
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “What do I do? What do I do?”  Stumpy thought.  “Wait a minute, that's right! If I get the Grinch's watch, I can control all the robots!”.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “H-E-Y-!  T-H-E-R-E Y-O-U-A-ZZZZZZ!”  Stumpy swiped the robot's head and threw it to the Grinch's furry, green hand
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “H-Hey!” the Grinch exclaimed angrily.  The watch flew in the air, with Stumpy running after it like a dog chasing its tail.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “Got it!” He yelled.  “Now to get rid of these robots!”  Explosions filled the air, with robots becoming pure dust everywhere.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “NOOOOOOOO!” the Grinch yelled angrily.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “Y'know, you could try being a good person and fix up those dimensions you messed up” Stumpy said.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “NEVER, NOT AFTER WHAT YOU'VE DONE TO ME!”  The Grinch shouted
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “Oh, okay! Looks like SOMEONE doesn't want gingerbread for Christmas!” Stumpy said smartly.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        The Grinch's eyes started to widen.  “No…. Gingerbread???” he questioned.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “Fine, I'll clean those dimensions up” the furry grouch sighed.
                    </p>

                    <h3 className="mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900">
                        5 DIMENSION CLEANINGS LATER
                    </h3>

                    <p className='mb-8 text-lg font-normal'>
                        “MMMM”, the Grinch said.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        Satisfied with the amount of gingerbread Stumpy had.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “So? Can you stop being bad?” Stumpy asked.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “I guess so”, the Grinch said half-heartedly.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        “Great! I'm keeping this watch so BYE!”
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        WHOOSH! “Wait! Aw man, I wanted more gingerbread!”, the Grinch said.
                    </p>

                    <p className='mb-8 text-lg font-normal'>
                        THE END
                    </p>

                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link href="#top" class='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'>
                            Back to top
                        </Link>
                    </div>
                </div>


            </main>
        </div>
    )
}