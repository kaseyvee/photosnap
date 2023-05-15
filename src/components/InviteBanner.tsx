import Button from "./Button";

function InviteBanner() {
  return (
    <div className="invite-banner">
      <picture>
        <source
          media="(min-width: 1100px)"
          srcSet={`/photosnap/assets/shared/desktop/bg-beta.jpg`}
        />
        <source
          media="(min-width: 786px)"
          srcSet={`/photosnap/assets/shared/tablet/bg-beta.jpg`}
        />
        <img src={`/photosnap/assets/shared/mobile/bg-beta.jpg`} alt="" />
      </picture>
      <div className="wrapper">
        <h3 className="header-large">WE'RE IN BETA. GET YOUR INVITE TODAY!</h3>
        <Button text="GET AN INVITE" colour="white" />
      </div>
    </div>
  );
}

export default InviteBanner;
