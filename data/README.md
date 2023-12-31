# Data preprocessing

This file details the steps to recreate the csv files to run the data population step. You will need Jupyter Notebooks, Numpy, Pandas

1. `unzip BHSA-with-extended-features.zip` 

2. `jupyter notebook` OR `jupyter lab`

3. Load the file as per the notebook named `Data_prep.ipynb` and run the functions in order

4. The file should output a file called `BHSA-with-extended-features-prepared_version.csv`, note that it becomes a comma delimited file vs a tab delimited as in the original

5. Now open `Split_data.ipynb` and run through the instructions in notebook. This notebook splits the one large file into 86 files.

