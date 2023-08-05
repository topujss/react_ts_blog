import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export default function SinglePost() {
  return (
    <div className="flex-[9]">
      <div className="singlePostWrapper p-5 pr-0">
        <img
          className="singlePostImg w-full h-[300px] object-cover rounded"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle text-center m-2 text-3xl">
          How a California vote on self-driving taxis could alter the future of AI
          <div className="singlePostEdit float-right text-xl cursor-pointer">
            <FaEdit className="inline-block mr-2 text-teal-500" />
            <FaTrashAlt className="inline-block text-fuchsia-500" />
          </div>
        </h1>
        <div className="singlePostInfo mb-5 flex justify-between text-xs text-[#be9656]">
          <span>
            By
            <strong className="singlePostAuthor ml-1">
              <Link className="link" to="/posts?username=Safak">
                David Ingram
              </Link>
            </strong>
          </span>
          <span>Aug. 4, 2023, 8:00 PM EDT</span>
        </div>
        <p className="singlePostDesc text-gray-500 text-xl ">
          <strong className="ml-5 text-3xl font-semibold uppercase">c</strong>alifornia state board is set to vote
          Aug. 10 on whether to allow tech companies Waymo and Cruise to launch a massive expansion of driverless
          taxi fleets in San Francisco, but the stakes are far bigger than local politics. The scheduled vote by
          the California Public Utilities Commission (CPUC) is shaping up as a referendum on an array of issues
          related to technology, including the politics of artificial intelligence and the human workforce affected
          by the technology’s rapid development. <br />
          <br /> If the commission agrees, hundreds of self-driving taxis could soon be available for hire by the
          general public, all day every day. Tech executives, labor unions, transit advocates, city officials and
          robotaxi customers are all engaged in furious last-minute lobbying to try to sway the board’s five
          appointed members — setting the stage for what promises to be a state-by-state battle over self-driving
          cars and trucks. “This is going to be the only chance for CPUC to get this right,” said Mike Di Bene, a
          local truck driver and member of the Teamsters, one of the unions that’s asking the state to pump the
          brakes on self-driving vehicles, which include taxis and big-rig trucks. <br />
          <br /> Self-driving taxis have become the latest flashpoint for conflict in San Francisco between the
          city’s wealthy, assertive technologists and the anti-corporate, progressive coalition that has a deep
          influence on local politics. Cruise and Waymo have courted locals with goodwill measures like
          sponsorships of the San Francisco Giants and the San Francisco Marathon, while the city’s transportation
          office is strongly opposed to the expansion, citing congestion and other issues. Some opponents have even
          employed a guerrilla street tactic: they have planted traffic cones on the vehicles’ hoods to confuse the
          software and disable them. The clash is in many ways a microcosm of all the thorny questions that AI is
          raising across the economy, including, How quickly will change occur? And what will happen to workers
          whose jobs are lost to robots?{' '}
        </p>
      </div>
    </div>
  );
}
