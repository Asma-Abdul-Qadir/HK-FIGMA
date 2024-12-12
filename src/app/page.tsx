
import HeroSection from "../Components/Herosection";
import FeatureProducts from "../Components/FeatureProducts";
import LatestProducts from "@/Components/LeatestProducts";
import TwoSections from "../Components/TwoSections";
import TrendingProducts from "../Components/TrendingProducts";
import DiscountItem from "@/Components/Discount";
import TopCategories from "@/Components/TopCategories";
import Newsletter from "@/Components/Newsletter";
import BrandsLogo from "../Components/Brandslogo";
import LatestBlog from "../Components/LatestBlog";


export default function Home() {
  return (
    <div>
      

<HeroSection/>
<FeatureProducts/>
<LatestProducts/>
<TwoSections/>
<TrendingProducts/>
<DiscountItem/>
<TopCategories/>
<Newsletter/>
<BrandsLogo/>

<LatestBlog/>

    </div>
   
  );
}
