import Card from '../components/Card';

const Projects = () => {
  return (
    <div className="relative overflow-auto h-screen bg-gradient-to-r from-indigo via-purple to-pink">
      <div className="p-10 grid lg:grid-cols-3 gap-5">
        <Card
          title=" Brain-Tumor-Segmentation-And-Classification"
          src="https://cdn.discordapp.com/attachments/870253294902210560/1021272817456648252/unknown.png"
          tag1="ResUnet"
          tag2="medical-imaging"
          tag3="segmentation"
          href="https://github.com/Rohith04MVK/Brain-Tumor-Segmentation-And-Classification"
        >
          Brain Tumor Segmentation And Classification using artificial
          intelligence
        </Card>
        <Card
          title="AI-Art-Generator"
          src="https://i.redd.it/lx5rvumro0581.jpg"
          tag1="Art"
          tag2="Style Transfer"
          tag3="AI-Art"
          href="https://github.com/Rohith04MVK/AI-Art-Generator"
        >
          A program that can add an artistic touch to any image using neural
          style transfer
        </Card>
        <Card
          title="Recolor"
          src="https://github.com/Rohith04MVK/Recolor/blob/main/images/index.jpg?raw=true"
          tag1="Recolor"
          tag2="Restore"
          tag3="Black and White to color"
          href="https://github.com/Rohith04MVK/Recolor"
        >
          Retouch old black and white images with the help of AI!
        </Card>
        <Card
          title="CPP-NN"
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/285/brain_1f9e0.png"
          tag1="from-scratch"
          tag2="linear-algebra"
          tag3="eigen"
          href="https://github.com/Rohith04MVK/Cpp-NN"
        >
          A simple and fast Neural Network library written in C++
        </Card>
        <Card
          title="Mini-Keras"
          src="https://cdn.discordapp.com/attachments/737334046069358612/832474796600066098/Screenshot_from_2021-04-16_10-07-30.png"
          tag1="from-scratch"
          tag2="linear-algebra"
          tag3="neural-networks"
          href="https://github.com/Deep-Alchemy/Mini-Keras"
        >
          An advanced and lightweight ML and Deep learning library for python.
        </Card>
        <Card
          title="Redox"
          src="https://media.discordapp.net/attachments/737334046069358612/1021370574922059816/My_project-11.png"
          tag1="linear-algebra"
          tag2="from-scratch"
          tag3="scientific-computing"
          href="https://github.com/Rohith04MVK/Redox"
        >
          A fast linear algebra library written in rust with support for
          automatic gradients
        </Card>
      </div>
    </div>
  );
};

export default Projects;
