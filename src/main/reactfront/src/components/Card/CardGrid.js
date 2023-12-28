import React from 'react';
import Card from './Card';
import './CardGrid.css'; // Import the CSS for the grid layout

const CardGrid = () => {
    const images = [
        "https://i.postimg.cc/ZqG6TwQd/1000002230-main-027.jpg",
        "https://i.postimg.cc/Dy6QqdS9/1000002320-main-058.jpg",
        "https://i.postimg.cc/NjP1ns7b/1000002323-main-055.jpg",
        "https://i.postimg.cc/L8stvYfn/1000002673-main-040.jpg",
        "https://i.postimg.cc/Xq85k4Yf/1000002700-main-052.jpg",
        "https://i.postimg.cc/zXzKXbx0/1000003016-main-035.png",
        "https://i.postimg.cc/Gm9Dv0wD/1000003017-main-045.png",
        "https://i.postimg.cc/BQmD8Sys/1000003076-main-054.jpg",
        "https://i.postimg.cc/7Zc2VBwW/1000003170-main-04.jpg",
        "https://i.postimg.cc/bYH1hH9Z/1000003276-main-042.jpg",
        "https://i.postimg.cc/HWQ9LCds/16932-Magnify0.jpg",
        "https://i.postimg.cc/c40Mg5L7/17548-Magnify0.jpg",
        "https://i.postimg.cc/hvgxmfc4/18725-Magnify0.jpg",
        "https://i.postimg.cc/HLcQDq6m/22383-main-040.png",
        "https://i.postimg.cc/pTKzyDN1/24517-Magnify0.jpg"
      ];
    
    return (
        <div className="card-grid-container">
            {/* Generate 16 Card components */}
            {Array.from({length: 1}).map((_, index) => (
                <Card
                    key={index}
                    imageSrc={`path-to-image-${index}.jpeg`} // replace with your image paths
                    title={`Card Title ${index + 1}`}
                    description="Talk about the pros and cons of this item"
                >
                </Card>
            ))}
        </div>
    );
};

export default CardGrid;
