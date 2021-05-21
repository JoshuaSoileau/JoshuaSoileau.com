import matter from "gray-matter";
import Layout from "@components/Layout/Layout";
import PostList from "@components/PostList";
import "twin.macro";
import H1 from "@components/typography/H1";
import H2 from "@components/typography/H2";
import RoundedBox from "@components/RoundedBox/RoundedBox";
import Twitter from "@components/Icons/Twitter";
import Github from "@components/Icons/Github";
import LinkedIn from "@components/Icons/Linkedin";

const Index = ({ title, description, posts, ...props }) => {
  // test
  return (
    <Layout pageTitle={title}>
      <RoundedBox>
        <section>
          <H1>
            My name is <span tw="text-indigo-500">Josh</span>.
            <small tw="mt-4 block">I made this website.</small>
          </H1>
        </section>

        <div tw="prose prose-xl mt-48">
          <section>
            <H2>Words.</H2>
            <PostList posts={posts} />
          </section>

          <section>
            <H2>Find me online.</H2>
            <ul tw="flex p-0 m-0 justify-start items-center">
              <li tw="mr-8 last:mr-0  inline-flex items-center">
                <a
                  tw="text-black hover:text-indigo-500"
                  href="https://twitter.com/joshua_soileau/"
                  aria-label="Josh's Twitter profile"
                >
                  <Twitter height="45" />
                </a>
              </li>
              <li tw="mr-8 last:mr-0  inline-flex items-center">
                <a
                  tw="text-black hover:text-indigo-500"
                  href="https://github.com/JoshuaSoileau/"
                  aria-label="Josh's Github profile"
                >
                  <Github height="45" />
                </a>
              </li>
              <li tw="mr-8 last:mr-0  inline-flex items-center">
                <a
                  tw="text-black hover:text-indigo-500"
                  href="https://www.linkedin.com/in/joshsoileau/"
                  aria-label="Josh's LinkedIn profile"
                >
                  <LinkedIn height={40} />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </RoundedBox>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}

// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }
