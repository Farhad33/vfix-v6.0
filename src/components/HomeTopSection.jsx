'use client'
import styled, { keyframes, css } from 'styled-components'
import { color } from '@/Theme'

const WaveSvg = (props) => (
  <svg
    id='visual'
    viewBox='0 0 960 540'
    {...props}
  >
    <path
      d='M0 515L26.7 518.7C53.3 522.3 106.7 529.7 160 532.5C213.3 535.3 266.7 533.7 320 525.5C373.3 517.3 426.7 502.7 480 501C533.3 499.3 586.7 510.7 640 513.7C693.3 516.7 746.7 511.3 800 505.3C853.3 499.3 906.7 492.7 933.3 489.3L960 486L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z'
      fill='#ffffff'
      strokeLinecap='round'
      strokeLinejoin='miter'
    />
  </svg>
)

export default function HomeTopSection() {

  return (
    <Container>
        <h1>Test</h1>
        <Home src="/main/3d-home.svg" />
        <WaveSvg />
        <BlueContainer />
    </Container>
  )
}

const BlueContainer = styled.div`
  background-color: ${color.VfixBlue};
  height: 200px;
  width: 100%;
  position: absolute;
  top: -200px;
  z-index: -1;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  height: 400px;
  width: 100%;
  background: ${color.VfixBlue};
  svg {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    z-index: 1;
  }
`

const fadeInHome = keyframes`
  0% {
    top: -200px;
    right: -500px;
  }
  100% {
    top: 0;
    right: 0;
  }
`
const Home = styled.img`
	max-width: 40rem;
	max-height: 40rem;
	min-width: 10rem;
	min-height: 10rem;
	width: 100%;
	height: 100%;
  cursor: pointer;
  position: relative;
  z-index: 2;
  animation: 1.5s ${fadeInHome} ease-out;
  @media (max-width: 900px) {
    width: 25rem;
	  height: 20rem;
  }
  @media (max-width: 400px) {
    width: 20rem;
	  height: 15rem;
  }
`










const WaveSvgBottom = () => (
  <svg className='WaveSvgBottom' preserveAspectRatio="xMidYMid" viewBox="0 0 2473 998">
  <g transform="translate(1236.5,499) scale(-1,-1) translate(-1236.5,-499)"><linearGradient id="lg-0.08661576646422253" x1="0" x2="1" y1="0" y2="0">
    <stop stop-color="rgba(255, 255, 255, 0.216)" offset="0"></stop>
    <stop stop-color="rgba(255, 255, 255, 0.731)" offset="1"></stop>
  </linearGradient><path d="" fill="url(#lg-0.08661576646422253)" opacity="0.75">
    <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" values="M0 0L 0 433.98797501721424Q 309.125 354.04112025919443  618.25 335.3556130660515T 1236.5 404.703796871089T 1854.75 338.4533082167783T 2473 283.1590916850035L 2473 0 Z;M0 0L 0 323.4943166871272Q 309.125 375.70527240489275  618.25 360.5278762468032T 1236.5 261.77049519996274T 1854.75 304.70575320994493T 2473 353.2064771897965L 2473 0 Z;M0 0L 0 403.65650704640893Q 309.125 439.5341470735591  618.25 399.54805513698074T 1236.5 413.3575568470869T 1854.75 270.239346385364T 2473 311.2291943612647L 2473 0 Z;M0 0L 0 433.98797501721424Q 309.125 354.04112025919443  618.25 335.3556130660515T 1236.5 404.703796871089T 1854.75 338.4533082167783T 2473 283.1590916850035L 2473 0 Z"></animate>
  </path><path d="" fill="url(#lg-0.08661576646422253)" opacity="0.75">
    <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-2.7777777777777777s" values="M0 0L 0 358.82448440322514Q 309.125 508.05957618633704  618.25 461.7870853427655T 1236.5 358.1888914686459T 1854.75 320.4218192107629T 2473 314.04850116763595L 2473 0 Z;M0 0L 0 453.1521994374534Q 309.125 479.8153700783197  618.25 441.1432488511508T 1236.5 388.5979158310755T 1854.75 389.9711369513235T 2473 213.72790748939943L 2473 0 Z;M0 0L 0 347.2283288718732Q 309.125 390.64200470850943  618.25 366.88512282224804T 1236.5 347.0482648198953T 1854.75 248.05341720765642T 2473 211.6377691674789L 2473 0 Z;M0 0L 0 358.82448440322514Q 309.125 508.05957618633704  618.25 461.7870853427655T 1236.5 358.1888914686459T 1854.75 320.4218192107629T 2473 314.04850116763595L 2473 0 Z"></animate>
  </path><path d="" fill="url(#lg-0.08661576646422253)" opacity="0.75">
    <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-5.555555555555555s" values="M0 0L 0 429.11659022822573Q 309.125 376.06270664356254  618.25 355.62335299408284T 1236.5 354.7786079540247T 1854.75 360.29792977208325T 2473 330.87349928066783L 2473 0 Z;M0 0L 0 493.8159198111947Q 309.125 462.78186981266697  618.25 444.7036123351259T 1236.5 347.16309368922657T 1854.75 317.51998550842757T 2473 269.1650621412307L 2473 0 Z;M0 0L 0 407.71542788028256Q 309.125 342.81006350734094  618.25 310.04051064696387T 1236.5 371.370396271398T 1854.75 256.1875475181456T 2473 323.33128888256084L 2473 0 Z;M0 0L 0 429.11659022822573Q 309.125 376.06270664356254  618.25 355.62335299408284T 1236.5 354.7786079540247T 1854.75 360.29792977208325T 2473 330.87349928066783L 2473 0 Z"></animate>
  </path><path d="" fill="url(#lg-0.08661576646422253)" opacity="0.75">
    <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-8.333333333333334s" values="M0 0L 0 400.9214021587501Q 309.125 446.4505359184544  618.25 403.696261854074T 1236.5 317.6439057300605T 1854.75 344.25493146123574T 2473 316.6950600805661L 2473 0 Z;M0 0L 0 445.8466164993576Q 309.125 455.1477948142513  618.25 408.81643994175994T 1236.5 377.66891883385995T 1854.75 388.87186732258317T 2473 282.75725976811964L 2473 0 Z;M0 0L 0 476.8665117532885Q 309.125 441.8273159450573  618.25 403.6899927911951T 1236.5 312.4037149936736T 1854.75 342.17260703145865T 2473 337.5377540766906L 2473 0 Z;M0 0L 0 400.9214021587501Q 309.125 446.4505359184544  618.25 403.696261854074T 1236.5 317.6439057300605T 1854.75 344.25493146123574T 2473 316.6950600805661L 2473 0 Z"></animate>
  </path><path d="" fill="url(#lg-0.08661576646422253)" opacity="0.75">
    <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-11.11111111111111s" values="M0 0L 0 359.12879049692333Q 309.125 413.8393019935044  618.25 373.81658373269596T 1236.5 286.3399815793865T 1854.75 283.9107531160595T 2473 307.51604326682104L 2473 0 Z;M0 0L 0 349.07107250764795Q 309.125 348.0555196926805  618.25 316.5800907252516T 1236.5 345.1060462565164T 1854.75 345.191338858094T 2473 321.3630818948558L 2473 0 Z;M0 0L 0 408.8793826884296Q 309.125 377.84574728853255  618.25 343.459768799052T 1236.5 313.8945951838318T 1854.75 265.57340601912733T 2473 341.5926430147928L 2473 0 Z;M0 0L 0 359.12879049692333Q 309.125 413.8393019935044  618.25 373.81658373269596T 1236.5 286.3399815793865T 1854.75 283.9107531160595T 2473 307.51604326682104L 2473 0 Z"></animate>
  </path><path d="" fill="url(#lg-0.08661576646422253)" opacity="0.75">
    <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-13.88888888888889s" values="M0 0L 0 400.264627180588Q 309.125 389.3777782263121  618.25 357.1144576561056T 1236.5 319.5914488337581T 1854.75 308.7350189472491T 2473 291.69200431928357L 2473 0 Z;M0 0L 0 443.8266532547548Q 309.125 465.68157111872586  618.25 452.20741831998623T 1236.5 338.68660581237907T 1854.75 305.8266136941977T 2473 341.6806616101301L 2473 0 Z;M0 0L 0 350.3863093274508Q 309.125 416.2944018408173  618.25 391.80238688127304T 1236.5 314.2814862143554T 1854.75 395.40208570632706T 2473 266.68267109376427L 2473 0 Z;M0 0L 0 400.264627180588Q 309.125 389.3777782263121  618.25 357.1144576561056T 1236.5 319.5914488337581T 1854.75 308.7350189472491T 2473 291.69200431928357L 2473 0 Z"></animate>
  </path><path d="" fill="url(#lg-0.08661576646422253)" opacity="0.75">
    <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-16.666666666666668s" values="M0 0L 0 335.527724808514Q 309.125 341.54894807633445  618.25 318.77927392290565T 1236.5 298.9057559792242T 1854.75 266.1266007900607T 2473 201.82515942553005L 2473 0 Z;M0 0L 0 387.1985585907355Q 309.125 336.26510203284073  618.25 312.1704088775752T 1236.5 276.20791349888725T 1854.75 376.4203232375249T 2473 256.0725948073514L 2473 0 Z;M0 0L 0 346.6972295229797Q 309.125 447.91106554701787  618.25 411.4990010020255T 1236.5 304.6377516508288T 1854.75 396.9583666286821T 2473 261.9912535741558L 2473 0 Z;M0 0L 0 335.527724808514Q 309.125 341.54894807633445  618.25 318.77927392290565T 1236.5 298.9057559792242T 1854.75 266.1266007900607T 2473 201.82515942553005L 2473 0 Z"></animate>
  </path><path d="" fill="url(#lg-0.08661576646422253)" opacity="0.75">
    <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-19.444444444444443s" values="M0 0L 0 381.5978618118562Q 309.125 361.07370615552605  618.25 342.9889366830381T 1236.5 432.7284660694813T 1854.75 316.87987352277906T 2473 274.38592803009794L 2473 0 Z;M0 0L 0 375.64647650934063Q 309.125 400.2825996345035  618.25 367.9327507237279T 1236.5 333.7510224285527T 1854.75 232.9727216174877T 2473 251.04194310903264L 2473 0 Z;M0 0L 0 410.02588259879957Q 309.125 406.44853932829517  618.25 376.4879427507415T 1236.5 349.01238920899635T 1854.75 309.40526806208163T 2473 281.0692673849587L 2473 0 Z;M0 0L 0 381.5978618118562Q 309.125 361.07370615552605  618.25 342.9889366830381T 1236.5 432.7284660694813T 1854.75 316.87987352277906T 2473 274.38592803009794L 2473 0 Z"></animate>
  </path><path d="" fill="url(#lg-0.08661576646422253)" opacity="0.75">
    <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-22.22222222222222s" values="M0 0L 0 332.065928878329Q 309.125 418.4215334556998  618.25 395.62681670257854T 1236.5 306.00450636810285T 1854.75 284.85282510535194T 2473 329.0074076524036L 2473 0 Z;M0 0L 0 421.57498642307974Q 309.125 366.4261345129147  618.25 318.1121467758758T 1236.5 328.6825347448202T 1854.75 284.4816239771753T 2473 232.29153453247375L 2473 0 Z;M0 0L 0 391.56255585083824Q 309.125 399.52365458107795  618.25 385.4979489647298T 1236.5 295.83136784916655T 1854.75 302.735384859306T 2473 309.7453666639839L 2473 0 Z;M0 0L 0 332.065928878329Q 309.125 418.4215334556998  618.25 395.62681670257854T 1236.5 306.00450636810285T 1854.75 284.85282510535194T 2473 329.0074076524036L 2473 0 Z"></animate>
  </path></g>
  </svg>
)
const WaveSvgTop = () => (
  <svg className='WaveSvgTop'  width="2473" height="998" preserveAspectRatio="xMidYMid" viewBox="0 0 2473 998">
    <g transform="translate(1236.5,499) scale(1,1) translate(-1236.5,-499)"><linearGradient id="lg-0.12742414423151593" x1="0" x2="1" y1="0" y2="0">
      <stop stop-color="rgba(0, 55, 255, 0.181)" offset="0"></stop>
      <stop stop-color="rgba(0, 255, 255, 0.146)" offset="1"></stop>
    </linearGradient><path d="" fill="url(#lg-0.12742414423151593)" opacity="0.75">
      <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" values="M0 0L 0 996.066916761973Q 309.125 889.9901109369913  618.25 850.0679301695329T 1236.5 740.8120576158808T 1854.75 748.865769593782T 2473 668.7386532726032L 2473 0 Z;M0 0L 0 892.2351009877985Q 309.125 796.6212392687647  618.25 778.0663367476766T 1236.5 793.5839139988775T 1854.75 650.0735255677689T 2473 599.2106374908053L 2473 0 Z;M0 0L 0 921.974626015315Q 309.125 878.8098892007285  618.25 853.3429717123112T 1236.5 714.5352432190139T 1854.75 638.6361613722773T 2473 644.6844299829412L 2473 0 Z;M0 0L 0 996.066916761973Q 309.125 889.9901109369913  618.25 850.0679301695329T 1236.5 740.8120576158808T 1854.75 748.865769593782T 2473 668.7386532726032L 2473 0 Z"></animate>
    </path><path d="" fill="url(#lg-0.12742414423151593)" opacity="0.75">
      <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-2.7777777777777777s" values="M0 0L 0 992.2404424057945Q 309.125 872.6992242458273  618.25 851.8696853114003T 1236.5 832.4563075547208T 1854.75 734.6476922708723T 2473 626.5202605545051L 2473 0 Z;M0 0L 0 979.5035230079828Q 309.125 951.6246416496055  618.25 915.9780837031958T 1236.5 674.4387230182317T 1854.75 738.391089297861T 2473 538.7519297815534L 2473 0 Z;M0 0L 0 974.2958194467413Q 309.125 799.9733807926091  618.25 779.8676972549493T 1236.5 792.9024927940931T 1854.75 690.3039288217927T 2473 636.4297069261792L 2473 0 Z;M0 0L 0 992.2404424057945Q 309.125 872.6992242458273  618.25 851.8696853114003T 1236.5 832.4563075547208T 1854.75 734.6476922708723T 2473 626.5202605545051L 2473 0 Z"></animate>
    </path><path d="" fill="url(#lg-0.12742414423151593)" opacity="0.75">
      <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-5.555555555555555s" values="M0 0L 0 976.2158435011987Q 309.125 814.8809414100505  618.25 799.2356365215438T 1236.5 751.4064049394358T 1854.75 662.9658338746644T 2473 561.0822611766741L 2473 0 Z;M0 0L 0 870.098190508055Q 309.125 928.1080783149592  618.25 908.395841731308T 1236.5 806.8969581481114T 1854.75 664.6063701963237T 2473 611.8160781839028L 2473 0 Z;M0 0L 0 851.8103575272286Q 309.125 932.8188930523454  618.25 892.0327900727896T 1236.5 706.5910054744335T 1854.75 618.9160830548342T 2473 667.1803801712315L 2473 0 Z;M0 0L 0 976.2158435011987Q 309.125 814.8809414100505  618.25 799.2356365215438T 1236.5 751.4064049394358T 1854.75 662.9658338746644T 2473 561.0822611766741L 2473 0 Z"></animate>
    </path><path d="" fill="url(#lg-0.12742414423151593)" opacity="0.75">
      <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-8.333333333333334s" values="M0 0L 0 858.471803412866Q 309.125 820.1036693472714  618.25 800.904921233337T 1236.5 749.43003584606T 1854.75 661.0160467910754T 2473 609.9809346841253L 2473 0 Z;M0 0L 0 877.2168574765518Q 309.125 962.9579501717054  618.25 926.1561947679077T 1236.5 719.8783010187157T 1854.75 721.6109266302012T 2473 520.6887036768785L 2473 0 Z;M0 0L 0 1002.0423014302805Q 309.125 940.6873027546911  618.25 906.4956362383076T 1236.5 819.736460879453T 1854.75 725.6500340851042T 2473 629.0039473297729L 2473 0 Z;M0 0L 0 858.471803412866Q 309.125 820.1036693472714  618.25 800.904921233337T 1236.5 749.43003584606T 1854.75 661.0160467910754T 2473 609.9809346841253L 2473 0 Z"></animate>
    </path><path d="" fill="url(#lg-0.12742414423151593)" opacity="0.75">
      <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-11.11111111111111s" values="M0 0L 0 941.8706223313566Q 309.125 912.7236568404858  618.25 869.764131375114T 1236.5 676.9600185929185T 1854.75 728.5425764222899T 2473 618.9471291885203L 2473 0 Z;M0 0L 0 1001.4822987708387Q 309.125 822.9806403020218  618.25 798.1383844960416T 1236.5 782.7816612600943T 1854.75 709.8529568147279T 2473 612.3665662904331L 2473 0 Z;M0 0L 0 994.663732185864Q 309.125 880.008651304698  618.25 845.603700751116T 1236.5 710.2054920999667T 1854.75 617.853056489643T 2473 532.2134681572472L 2473 0 Z;M0 0L 0 941.8706223313566Q 309.125 912.7236568404858  618.25 869.764131375114T 1236.5 676.9600185929185T 1854.75 728.5425764222899T 2473 618.9471291885203L 2473 0 Z"></animate>
    </path><path d="" fill="url(#lg-0.12742414423151593)" opacity="0.75">
      <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-13.88888888888889s" values="M0 0L 0 993.5862628473732Q 309.125 903.5808829829333  618.25 876.9331081460039T 1236.5 823.0509785858867T 1854.75 718.9525410320532T 2473 598.5117514519843L 2473 0 Z;M0 0L 0 1007.5206389815312Q 309.125 848.6694018442874  618.25 829.7845946687486T 1236.5 747.5623965319444T 1854.75 612.7816093071451T 2473 581.5930878073009L 2473 0 Z;M0 0L 0 970.8566625962073Q 309.125 807.9582391565909  618.25 789.3035335888029T 1236.5 784.1796959873367T 1854.75 734.1264989099598T 2473 601.5219200413665L 2473 0 Z;M0 0L 0 993.5862628473732Q 309.125 903.5808829829333  618.25 876.9331081460039T 1236.5 823.0509785858867T 1854.75 718.9525410320532T 2473 598.5117514519843L 2473 0 Z"></animate>
    </path><path d="" fill="url(#lg-0.12742414423151593)" opacity="0.75">
      <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-16.666666666666668s" values="M0 0L 0 914.4241714555582Q 309.125 813.2335324850667  618.25 782.0289086288441T 1236.5 761.3571191351274T 1854.75 694.8233226678096T 2473 643.968078184731L 2473 0 Z;M0 0L 0 945.2465705589103Q 309.125 888.0638988184661  618.25 863.0715071202492T 1236.5 704.041634190278T 1854.75 705.7006128979745T 2473 513.594425318192L 2473 0 Z;M0 0L 0 895.780490367018Q 309.125 946.2130016760269  618.25 913.4057460700305T 1236.5 732.7867515621199T 1854.75 611.8276821769789T 2473 512.0365191733149L 2473 0 Z;M0 0L 0 914.4241714555582Q 309.125 813.2335324850667  618.25 782.0289086288441T 1236.5 761.3571191351274T 1854.75 694.8233226678096T 2473 643.968078184731L 2473 0 Z"></animate>
    </path><path d="" fill="url(#lg-0.12742414423151593)" opacity="0.75">
      <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-19.444444444444443s" values="M0 0L 0 955.1888686349881Q 309.125 860.455502826772  618.25 830.6213704153416T 1236.5 783.0055328584119T 1854.75 729.8785408766626T 2473 532.4355950975689L 2473 0 Z;M0 0L 0 1016.7957703991161Q 309.125 947.3815451463906  618.25 930.6973723258031T 1236.5 796.5595199559716T 1854.75 625.2969241533747T 2473 538.1086261512993L 2473 0 Z;M0 0L 0 885.1366762234795Q 309.125 898.6331882946673  618.25 875.4656163674035T 1236.5 862.1514656292965T 1854.75 695.1216158496221T 2473 651.761010100992L 2473 0 Z;M0 0L 0 955.1888686349881Q 309.125 860.455502826772  618.25 830.6213704153416T 1236.5 783.0055328584119T 1854.75 729.8785408766626T 2473 532.4355950975689L 2473 0 Z"></animate>
    </path><path d="" fill="url(#lg-0.12742414423151593)" opacity="0.75">
      <animate attributeName="d" dur="25s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-22.22222222222222s" values="M0 0L 0 1001.8456144967344Q 309.125 886.4671871960539  618.25 867.9245418446878T 1236.5 662.6601152569659T 1854.75 726.0133274749494T 2473 558.4596005484013L 2473 0 Z;M0 0L 0 938.8517098624008Q 309.125 937.9423751117022  618.25 917.4319932935009T 1236.5 697.8467102590672T 1854.75 628.5124323133846T 2473 540.4884183388481L 2473 0 Z;M0 0L 0 857.0233056593892Q 309.125 824.9148851662568  618.25 779.0202392141222T 1236.5 710.28515022454T 1854.75 699.332535478216T 2473 626.5462549972008L 2473 0 Z;M0 0L 0 1001.8456144967344Q 309.125 886.4671871960539  618.25 867.9245418446878T 1236.5 662.6601152569659T 1854.75 726.0133274749494T 2473 558.4596005484013L 2473 0 Z"></animate>
    </path></g>
  </svg>
)
const WaveContainer = styled.div`
  position: relative;
  /* top: 0; */
  /* overflow: hidden; */
  background-image: url('/images/background-large.jpg');
  background-size: cover;
  // Adjust the following to suit your design
  height: 1000px;
  width: 100%;
  padding: 5px;
  border: 5px solid #000000;
  .WaveSvgBottom {
    margin: auto;
    background: rgba(255, 255, 255, 0);
    display: block;
    z-index: 1;
    position: absolute;
    bottom: 0;
    shape-rendering: auto;
    width: 100%;
  }
  .WaveSvgTop {
    margin: auto;
    /* background: rgb(255, 255, 255); */
    display: block;
    z-index: 2;
    position: absolute;
    top: 0;
    shape-rendering: auto;
    width: 100%;
  }
`
// function WaveComponent() {
//   return (
//     <WaveContainer>
//       <WaveSvgTop />
//       <WaveSvgBottom />
//     </WaveContainer>
//   )
// }