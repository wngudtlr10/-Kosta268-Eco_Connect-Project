import React from 'react';
import Card from './Card';
import './CardGrid.css'; // Import the CSS for the grid layout

const CardGrid = () => {
    return (
        <div className="card-grid-container">
            {/* Generate 16 Card components */}
            {Array.from({length: 9}).map((_, index) => (
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
