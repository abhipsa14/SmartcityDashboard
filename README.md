## Problem Statement

As cities grow, **Greenhouse Gas (GHG) emissions** increase due to industrial activities, traffic congestion, and high energy consumption. These emissions drive climate change, impacting urban environments with rising temperatures, poor air quality, and increased vulnerability to extreme weather. With cities contributing over **70% of global GHG emissions**, addressing them is essential to creating sustainable cities and meeting global climate goals, such as the Paris Agreement’s 1.5°C target.

---

## Solution Description

The **Smart City GHG Emissions Dashboard** is a cutting-edge tool that uses **Intel's AI technologies** to help cities monitor and reduce **Greenhouse Gas (GHG) emissions**. Combining AI, IoT, and big data analytics, it provides real-time insights and predictions to support data-driven decisions for managing emissions and achieving climate goals.

### Key Features:
1. **GHG Emission Monitoring**: 
   Tracks emissions in real-time across transportation, industry, and residential sectors using **IoT sensors**.
     Monitors **CO2**, **CH4**, and **NOx** levels for a comprehensive emissions profile.

2. **Anomaly Detection**: 
   Uses **Machine Learning** to detect abnormal spikes or drops in emissions, offering early warnings for prompt action.

3. **Spatial Emission Prediction**: 
   Forecasts future emission patterns across city regions by analyzing **population density**, **traffic**, and **industrial activity**.

4. **Suggestion Chatbot**: 
   Provides real-time, **AI-powered** recommendations for emission reduction strategies, like traffic optimization and green energy adoption.

---

## Glimpses of User Interface

![Screenshot from 2024-10-07 19-06-50](https://github.com/user-attachments/assets/b20c12b9-d0eb-4332-b98f-47a7754ff0a4)

This is the Main page or Landing page of our website "SMART CITY DASHBOARD"

![Screenshot from 2024-10-07 19-07-15](https://github.com/user-attachments/assets/df575051-1648-46b9-81b8-242d88e4d77f)

![Screenshot from 2024-10-07 19-10-56](https://github.com/user-attachments/assets/febba54c-d21a-4d37-a524-5e452f1c0b8b)

This is the pie chart for the GHG emissions, highlighting the main gases—like Carbon Dioxide (CO2), Methane (CH4), and Nitrous Oxide (N2O)—along with their percentages (e.g., CO2 at 70%).

![Screenshot from 2024-10-07 19-10-40](https://github.com/user-attachments/assets/701966df-c847-4792-bb13-89713e26e8cb)
![Screenshot from 2024-10-07 19-10-29](https://github.com/user-attachments/assets/d7f2e777-0abb-49a0-a062-216f47dcf9fa)
![image](https://github.com/user-attachments/assets/9894f499-ac2a-4448-8f9e-226356280560)
![Screenshot from 2024-10-15 09-54-31](https://github.com/user-attachments/assets/c2cb1f48-2ab9-4d01-b9cb-3833934704d6)



Total Emissions: Annually, over 36 billion metric tons of CO2 are released, primarily from fossil fuels, industrial processes, and land-use changes.
Major Contributors: China, the U.S., and the EU are the top emitters, with China accounting for about 28% of global emissions.
Trends: Global CO2 emissions have risen gradually due to industrialization, population growth, and increasing energy consumption, despite efforts to reduce them.
## CO2 Emissions in India
Total Emissions: India is the third-largest emitter, contributing around 7% of global emissions (over 2.5 billion metric tons annually).
Sector Breakdown: The energy sector, particularly coal-fired plants, is the main source, followed by transportation, agriculture, and industry.
Growth Rate: Emissions are rising due to rapid urbanization and economic growth, highlighting the need for effective reduction policies.

![Screenshot from 2024-10-07 19-44-03](https://github.com/user-attachments/assets/aac6e867-05e8-4f75-a16e-c33df807db01)

![Screenshot from 2024-10-07 20-21-59](https://github.com/user-attachments/assets/f1fd0c10-e9a3-4f62-8406-3d98ccbc04f8)

We use MapBox to visualize Carbon Dioxide, Methane, and Nitrous Oxide emissions across regions. It generates interactive maps that help city planners and policymakers understand the distribution of greenhouse gases, enabling informed decisions for emission control and climate strategies.

---

## AI Integration

### AI Models Used:
- **Random Forest Regression**: For emission predictions.
- **Autoencoders**: For anomaly detection.
- **Convolutional Neural Networks (CNNs)**: For spatial emission predictions.
- **Natural Language Processing (NLP)**: Powers the suggestion chatbot.

### Intel Technologies Used:
- **Intel oneAPI AI Analytics Toolkit**: Optimizes AI workloads and accelerates model performance.
- **Intel DAAL**: Handles big data processing for fast clustering.
- **OpenVINO**: Enables real-time inference for AI models.



## Technical Architecture

### Datasets:
- Primary datasets are sourced from urban traffic, industrial, and weather data.
- Dataset used: ** ghg2_with_insights.csv **
- Additional datasets from public sources and environmental monitoring systems are also integrated.

### Technology Stack:
- **Backend Framework**: Django
- **Database**: MongoDB
- **Frontend**: React.js, Mapbox, HTML/CSS
- **Machine Learning Libraries**: TensorFlow, Scikit-learn, Pandas, NumPy, Matplotlib

### Tools Used:
- **Intel oneAPI AI Analytics Toolkit**: For AI workload optimization.
- **Intel Distribution for Python**: For data science and machine learning.
- **OpenVINO**: Real-time data processing at the edge.
- **MongoDB**: Managing large datasets.
- **Mapbox**: Data visualization for emission heat maps.

---

## Video Link
  
---

## Future Potential and Scalability

The dashboard is designed to scale across different cities and urban environments. It is modular and cloud-based, leveraging **edge computing** with OpenVINO and **interoperability** with existing systems. It supports public awareness through real-time data insights and offers policymakers valuable tools for sustainability planning.

---

## Intel Libraries, Frameworks & Performance Improvements

### Intel Software Components:
- **Intel DAAL**: Fast clustering and data processing for emissions data.
- **Intel MKL**: Accelerates mathematical computations for data analytics.
- **Intel one API**: Optimizes performance across multiple architectures.
- **OpenVINO Toolkit**: For real-time inference on edge devices.
- **Intel AI Analytics Toolkit**: Optimized Python libraries for advanced data science and machine learning.

### Intel Hardware Components:
- **Intel CPUs**: Utilized for efficient model training and data processing.
- **Intel DevCloud & Tiber Cloud**: Used for cloud-based resource scalability.

### Performance Improvements:
- **Accelerated Model Training**: Hugging Face models fine-tuned with Intel’s libraries for faster training.
- **Real-time Insights**: Deployed models with OpenVINO for edge computing to provide real-time insights on GHG emissions.

---

## Contact Information

For more details on the project, please contact:
- **Atul Maurya** - [atulmaurya18.04@gmail.com](mailto:email@example.com)
- **Prashant Singh** - [prashant23122003@gmail.com](mailto:email@example.com)
- **Abhipsa Srivastava** - [abhipsasri8183@example.com](mailto:email@example.com)
- **Shristi Kushwaha** - [shristikushwaha18@gmail.com](mailto:email@example.com)



