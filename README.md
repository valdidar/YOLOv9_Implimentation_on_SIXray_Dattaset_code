# Prohibited Item Detection in X-ray Images Using Deep Learning

This repository contains the implementation of a deep learning model designed to detect prohibited items within X-ray security imagery, using the extensive and challenging SIXray dataset. The project harnesses the power of the YOLOv9 architecture to achieve high accuracy in recognizing items such as guns, knives, and other dangerous objects in complex image backgrounds.

## Project Overview

The aim of this project was to develop a robust model capable of detecting prohibited items from X-ray images, which are commonly used in security checks at airports and other sensitive environments. This model leverages the YOLOv9 deep learning architecture, known for its speed and efficiency, to handle the complexity and variety of the SIXray dataset.

## Why YOLOv9?

- **Speed and Efficiency**: YOLOv9 provides real-time object detection speeds, crucial for deployment in security-critical environments. This was especially important given the limited computational resources available.
- **High Accuracy**: Demonstrates superior performance in terms of precision and recall, especially important for the reliable detection of prohibited items.
- **Scalability**: Easily scales with dataset size and diversity, making it suitable for the extensive and varied images in the SIXray dataset.
- **Computationally Feasible**: Ideal for scenarios with limited computational resources. The model was trained using only a subset of the dataset on a laptop and Google Colab, which provides limited GPU access.

## Dataset

The SIXray dataset contains over one million annotated X-ray images, featuring common and rare prohibited items under various occlusion scenarios. For this specific training, only 8312 images (all positive) were used due to the limited computational resources available.

[Link](https://universe.roboflow.com/yolov8-b0lk6/sixray-nl2v3) - to costum dataset I uploaded on Roboflow to be used to load dataset on google colab directly.

## Model Training

The model was trained using specific parameters to optimize detection:
- Batch size: 16
- Epochs: 30
- Image resolution: 320x320 pixels
- Optimization techniques included data augmentation methods like close mosaic to enhance the model's ability to generalize from complex input data.

## Results

After training, the model achieved impressive results, showcasing high precision and recall rates across different classes of objects:
- Overall mAP50: 85.7%
- Highest precision for gun detection: 96.7%

These metrics underscore the model's capability to effectively identify prohibited items in real-time applications.

## Usage

This project utilizes YOLOv9, a state-of-the-art deep learning model for object detection tasks. For guidance on how to use this model with custom datasets, please refer to the following resources:

- **YOLOv9 GitHub Repository**: [YOLOv9 by WongKinYiu](https://github.com/WongKinYiu/yolov9) - This GitHub page provides code and detailed instructions for training the YOLOv9 model on any custom dataset.
- **Roboflow YouTube Tutorial**: [Using YOLOv9 for Custom Object Detection](https://www.youtube.com/watch?v=XHT2c8jT3Bc&feature=youtu.be) - This video by Roboflow offers a step-by-step tutorial on how to effectively train YOLOv9.

## Conclusion

This project contributes to the ongoing efforts to enhance security measures through advanced imaging and AI technologies. The implementation demonstrates not only technical proficiency but also a deep understanding of the operational needs in security-sensitive environments.

Feel free to explore the code, suggest improvements, or fork this repository to adapt the model to new challenges.

## License

This project is released under the MIT License.
