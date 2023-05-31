import { Banner } from './Banner';
import { BannerAds } from './BannerAds';

const Components = (target) => {
  return {
    Banner,
    BannerAds,
  }[target];
};

export const Switcher = (props) => {
  const { comp, addOns } = props;
  const Dynamo = Components(comp);
  return (
    <>
      <Dynamo {...addOns} />
    </>
  );
};
