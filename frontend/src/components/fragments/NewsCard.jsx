const NewsCard = (props) => {
  const { profileImage, name, username, news, time, key } = props;

  return (
    <>
      <div key={key} className="flex gap-4">
        <div className="bg-slate-950 h-10 w-10 rounded-full">
          <h2 className="text-xl font-bold text-white text-center leading-10">
            {profileImage}
          </h2>
        </div>
        <div>
          <div className="flex justify-start items-center gap-3">
            <h2 className="text-lg font-bold text-slate-950">{name}</h2>
            <p className="text-sm font-normal text-slate-800">{`@${username}`}</p>
          </div>
          <p className="text-base font-normal text-slate-800 max-w-72">
            {news}
          </p>
          <p className="text-sm font-normal text-slate-800 max-w-72 mt-2">
            {time}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
