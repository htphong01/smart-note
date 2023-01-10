import pickle
import re
import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from flask import Flask, render_template, jsonify,request
import simplejson as json
from flask_cors import CORS

#Load model
pickled_model = pickle.load(open('model.pkl', 'rb'))
#Input data
def corpus_text():
  corpus = open("corpus.txt", "r", encoding = "utf8").read()
  corpus = re.sub(r'(Mr|St|Mrs|Ms|Dr|dr|mr|mrs)[.]', '', corpus)
  corpus = corpus.lower()
  corpus = re.sub("[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)", '', corpus)
  corpus = corpus.replace('\r', '').replace('\ufeff', '').replace('_', '').replace('—', ' ').replace('/n','').replace('\n', '.')
  corpus = re.sub('[?!,]', '', corpus)
  corpus = re.sub('[()-]', '', corpus)
  corpus = re.sub('["%!$/:\']', '', corpus)
  corpus = re.sub('  ', '', corpus)
  corpus = re.sub("\d+", "", corpus)
  corpus = corpus.split(".")
  return corpus
#Create vocab
corpus = corpus_text()
tokenizer = Tokenizer(oov_token='<oov>') # For those words which are not found in word_index
tokenizer.fit_on_texts(corpus) 
vocab = {}
for k, v in tokenizer.word_index.items():
  vocab[v] = k
#Predict
def input(string):
  user_input = string # Change to user_input = {}
  next_words = 

  for _ in range(next_words):
      token_list = tokenizer.texts_to_sequences([user_input])[0]
      token_list = pad_sequences([token_list], maxlen=17, padding='pre')
      # predicted = np.argmax(model.predict(token_list), axis=-1)
      predicted = np.argsort(pickled_model.predict(token_list), axis=-1)[0][::-1][:3]
        
      output_word = []

      for i in predicted:
        output_word.append(vocab[i])

      # output_word_str = ""
      # for word, index in tokenizer.word_index.items():
      #     if index == predicted:
      #         output_word_str = word

  return output_word;

corpus_text()

app = Flask(__name__)
CORS(app, resources={"*": {"origins": "*"}})

@app.route('/output', methods=['GET'])
def worker():
  string = request.args.get('q')
  return json.dumps(input(string))

if __name__=="__main__":
  # print(input("sherlock"))
  app.run(host="localhost", port=3002, debug=True)

