import Publications from "../Publications";

export default function PublicationsExample() {
  const mockPublications = [
    {
      title: "Advanced Techniques in Deep Learning for Natural Language Understanding",
      authors: "Smith, J., Johnson, A., Williams, B.",
      venue: "International Conference on Machine Learning (ICML)",
      year: 2024,
      pdfUrl: "#"
    },
    {
      title: "A Novel Approach to Transfer Learning in Computer Vision",
      authors: "Smith, J., Davis, C.",
      venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2024,
      pdfUrl: "#"
    },
    {
      title: "Scalable Machine Learning Systems for Big Data Analytics",
      authors: "Smith, J., Brown, D., Miller, E.",
      venue: "ACM SIGKDD International Conference on Knowledge Discovery and Data Mining",
      year: 2023,
      pdfUrl: "#"
    }
  ];

  return <Publications publications={mockPublications} />;
}
