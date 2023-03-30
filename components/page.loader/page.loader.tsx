import { motion } from 'framer-motion';

export const PageLoader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
      <motion.div>
        <svg
          className="animate-bounce duration-150 h-[200px] w-[200px]"
          viewBox="0 0 201 206"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.60517084">
            <g id="Wedding-Invitation-6-ring-color-" transform="translate(-969.000000, -442.000000)">
              <g
                id="Group-2-Copy-2"
                transform="translate(1003.874392, 547.055695) rotate(-21.000000) translate(-1003.874392, -547.055695) translate(865.420877, 444.776115)"
              >
                <g id="Group-3" transform="translate(124.700059, 43.135609)">
                  <ellipse
                    id="Oval-Copy-2"
                    stroke="#466473"
                    stroke-width="10"
                    transform="translate(66.699684, 91.635466) rotate(13.000000) translate(-66.699684, -91.635466) "
                    cx="66.6996841"
                    cy="91.6354655"
                    rx="49.841565"
                    ry="53.9626258"
                  ></ellipse>
                  <g
                    id="Group"
                    transform="translate(120.292558, 30.009604) rotate(6.000000) translate(-120.292558, -30.009604) translate(91.050832, 2.908128)"
                  >
                    <polygon
                      id="Path"
                      fill="#466473"
                      transform="translate(17.202529, 42.899542) rotate(38.000000) translate(-17.202529, -42.899542) "
                      points="8.83419376 38.2298152 25.5708651 38.4301405 22.8747828 47.5692684 11.273771 47.4304131"
                    ></polygon>
                    <g
                      id="Path-3"
                      transform="translate(29.241726, 27.101476) rotate(38.000000) translate(-29.241726, -27.101476) translate(2.962747, 13.240598)"
                      fill="#8BAFC8"
                    >
                      <polygon
                        id="Path-2"
                        points="17.4221407 27.6066843 0 10.1430346 8.26449545 0 44.4920601 0 52.5579588 10.1430346 35.2808362 27.7217544"
                      ></polygon>
                    </g>
                    <line
                      x1="11.4196569"
                      y1="7.61149182"
                      x2="52.002751"
                      y2="41.0496321"
                      id="Line"
                      stroke="#FFFAFA"
                      stroke-linecap="square"
                    ></line>
                    <line
                      x1="21.7643671"
                      y1="15.7671358"
                      x2="32.9048243"
                      y2="12.5048782"
                      id="Line-2"
                      stroke="#FFFFFF"
                      stroke-linecap="square"
                    ></line>
                    <line
                      x1="40.8622938"
                      y1="32.0784237"
                      x2="42.4537876"
                      y2="19.8449578"
                      id="Line-2-Copy-2"
                      stroke="#FFFFFF"
                      stroke-linecap="square"
                    ></line>
                    <line
                      x1="16.9898855"
                      y1="33.7095525"
                      x2="21.7643671"
                      y2="15.7671358"
                      id="Line-2-Copy"
                      stroke="#FFFFFF"
                      stroke-linecap="square"
                    ></line>
                    <line
                      x1="24.1516079"
                      y1="41.0496321"
                      x2="40.8622938"
                      y2="32.0784237"
                      id="Line-2-Copy-3"
                      stroke="#FFFFFF"
                      stroke-linecap="square"
                    ></line>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <div className="mt-4 text-center">
          <h1 className="text-5xl sm:text-7xl">Loading</h1>
        </div>
      </motion.div>
    </div>
  );
};
