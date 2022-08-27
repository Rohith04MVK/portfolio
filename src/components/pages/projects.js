import React from "react";
import Card from "../cards";
export const Projects = () => {
  return (
    <div class="bg-indigo-900 relative overflow-hidden h-screen">
      <img src="https://wallpapercave.com/wp/wp7563482.jpg" class="absolute h-full w-full object-cover" />
      <div class="grid lg:grid-cols-3">
        <Card title="Brain Tumor Detection Using UNET" src="https://prod-images-static.radiopaedia.org/images/17420182/258f5e41fb90d89f73d24c077e93f5_big_gallery.jpeg">Hello Noobs</Card>
        <Card title="Neural style transfer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg">Test</Card>
        <Card title="Recolor" src="https://github.com/Rohith04MVK/Recolor/blob/main/images/index.jpg?raw=true">Test</Card>
      </div>
    </div>
  );
};