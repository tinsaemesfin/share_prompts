import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Welcome to Proptomia
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            proptopia is an open-source AI prompting tool for modern world to descover, create and share prompts.
        </p>
        <Feed />
        {/* FEED */}

    </section>
  )
}

export default Home