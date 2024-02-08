# # app.py
# from flask import Flask, render_template
# import pandas as pd

# app = Flask(__name__)

# @app.route('/')
# def display_table():
#     # Read the CSV file
#     data = pd.read_csv('report2.csv')

#     # Convert DataFrame to HTML table
#     table_html = data.to_html(classes='table table-striped', index=False)

#     return render_template('index.html', table=table_html)

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, jsonify
import requests
import json
import pandas as pd

app = Flask(__name__)

@app.route('/')
def process_data():
    url = "https://api.apilayer.com/image_to_text/url?url=https://lh3.googleusercontent.com/pw/ABLVV84oS8vKNHg62q7yAZqPfPV0IxIa9I-1GKg01QMbqpQe-3f48rI6SfmYMvJ-zGjsLz1omejFWEtIEbRm1Iq2zfbg8Bs7_M0b50xZov_hLXXz5n56-KwcfoOgoBa5wlsj9s6rmuHqMN1uV7p_v3grVSmKdgFZm2YB6sSjhorBcrMlBSxeqn0t9po_cY-N3ntoUlAI6zUc7OH0XpsK60h_zmJmoHX9fdoMe7uVwqyeWoKMg5o-Qa8hqYrhKFVE6jEY4nX5VF3Vw_cneh_scM8gIWFJAgtA559_-uAxULyrB0ob_iMzJrF9bDzwSa-TRaRpgkexIyQDElr1uP5wHkX17BGXHqAPejpVqBmtGBlbciNiAo9bAKhxHnz6ItIIkkQf6srPjeOYiEmy6zZnpPjxiLObpX92jlXyXP89wV8fnLv1z7JxRh5cJe3wUzctaKuy9G0yLbgQZupqkTRPWGfy_muteUzex6gpHVhBB9x103x9mStyyxBf9DVPAlcnL6b9z_bRUIwiN6g8hF1QIpSCZqApiul39QqE_OpYHdCL1SnFKPWVEbnlZDFTijC1eEMHOPX6YDIKBpmaQk0fzepzdrXEO4M1QSsgmyWgsof9OXb2I6DZnoDpZ2rbCHQfujhKtcElTaSo8Hx4vImDpAODY_srhPrlkftJO-l6uxkEvqOb0LrDxahyIiC2NeRtrFxweT2fKdbtTDrbp30RJ_P3t-_Ai4SFY7VnLh5bfxOx0C-sRrHr8wlA3vh6PgprTiJUuVdQ51F58eVhC4ygxNCf9nKPy62L879cztYPXrf3UJErMuWX1wX8JCe_YtO_Ok7qQLuFXFjXyt_JnF0hO_qJWCUCLrSqzgGKn2O4LYLJihiICENIDr5FleE_lEqALsERJDpL9-Qc5mCPCd4YbiUZTR3Srk_C_WPgwzbOjPsg_CDlgr6fLVasXcynx51Ht0CbUkhDsB3KryKL=w760-h388-s-no-gm?authuser=0"

    payload = {}
    headers= {
      "apikey": "bOw6cAeOWem618XC5WRlgwXP3Vl61Lqu"
    }
    response = requests.get(url, headers=headers, data=payload)
    status_code = response.status_code
    result = response.text
    json_object = json.loads(result)

    ls = json_object['annotations']

    date = []
    result = []
    test_no = []
    
    for i in range(63, 72):
        date.append(ls[i])

    for i in range(72, 81):
        result.append(ls[i])

    i = 41
    while i < 59:
        a = ls[i] + " " + ls[i + 1]
        test_no.append(a)
        i += 2

    dic = {'Test No.': test_no, 'Date of Test': date, 'Result Qualified (Yes/No)': result}

    return jsonify(dic)

if __name__ == '__main__':
    app.run(debug=True)
