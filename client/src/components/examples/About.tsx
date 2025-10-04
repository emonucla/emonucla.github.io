import About from "../About";

export default function AboutExample() {
  return (
    <About
      content="I am a second-year Ph.D. student working on cutting-edge research in artificial intelligence. My research interests span multiple domains within computer science, with a particular focus on developing practical solutions to real-world problems through the application of machine learning and data science techniques."
      interests={[
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Deep Learning",
        "Data Science",
        "Artificial Intelligence"
      ]}
    />
  );
}
