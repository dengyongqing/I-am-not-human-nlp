import numpy as np
import pandas as pd

# df_ask_answer = pd.DataFrame([])
# df_answer = pd.DataFrame([])

df_ask_answer = pd.DataFrame([])
df_answer = pd.DataFrame([])

def getCommand():
    print('')
    print('1:训练')
    print('2:测试')
    print('请输入指令：')
    cmd = input()
    return cmd

def getWords(ask):
    ask_list = list(ask)
    df_ask_answer_index = list(df_ask_answer.index)
    df_ask_answer_columns = list(df_ask_answer.columns)

    print(list(set(ask_list) & set(df_ask_answer_columns)))
    print(df_ask_answer)

    df_temp = df_ask_answer.loc[list(set(ask_list) & set(df_ask_answer_columns))]
    # df_temp = df_ask_answer[ask_list]

    df_temp['col_sum'] = df_temp.apply(lambda x: x.sum(), axis=1)
    # df_ask_answer.loc['row_sum'] = df_ask_answer.apply(lambda x: x.sum())
    df_temp = df_temp.sort_values(by='col_sum', ascending=False)
    df_temp_index_len = len(df_temp.index)

    if df_temp_index_len <= 5:
        df_temp = df_temp.head(df_temp_index_len)
    else:
        df_temp = df_temp.head(5)
   
    # df_temp.sort(columns = ['col_sum'],axis = 0,ascending = False)

    # print(df_temp)

    return  df_temp.index

def sortWords(keys):

    keys_list = list(keys)
    df_answer_columns = df_answer.columns
    # keys_list = list(set(keys_list) & set(df_answer_columns))
    keys_list = df_answer_columns[keys_list]
    print("sortWords：")
    print(df_answer)
    print(keys_list)
    keys_list_len = len(keys_list)
    df_temp = df_answer[keys_list]
    df_temp['col_sum'] = df_temp.apply(lambda x: x.sum(), axis=1)
    # df_temp.loc['row_sum'] = df_answer.apply(lambda x: x.sum())
    df_temp = df_temp.sort_values(by='col_sum', ascending=False)
    # df_temp_index_len = len(df_temp.index)

    df_temp = df_temp.head(keys_list_len)

    print("我的回答哦：")
    print(df_temp.index)
    return ''.join(df_temp.index)

def getSentence():
    print('getSentence')

def mapAnswer(answer):
    answer_list = list(answer)
    answer_list_len = len(answer_list)

    df_answer_dict = df_answer.to_dict(orient='dict')

    for i in range(0, answer_list_len):
        if i == 0:
            continue

        answer_key = answer_list[i]
        pre_i = i - 1

        # if i == 0:
        #     pre_i = 0
        
        # next_i = i + 1

        # if pre_i < 0:
        #     pre_i = 0
        # if next_i == answer_list_len:
        #     next_i = answer_list_len-1

        pre_key = answer_list[pre_i]
        # next_key = answer_list[next_i]

        if answer_key not in df_answer_dict:
            df_answer_dict[answer_key] = {}

        if pre_key not in df_answer_dict[answer_key]:
            df_answer_dict[answer_key][pre_key] = 1
        else: 
            df_answer_dict[answer_key][pre_key] += 1


        # if i == (answer_list_len - 1):
        #     if answer_key not in df_answer_dict[answer_key]:
        #         df_answer_dict[answer_key][answer_key] = 1
        #     else: 
        #         df_answer_dict[answer_key][answer_key] += 1

        # if next_key not in df_answer_dict[answer_key]:
        #     df_answer_dict[answer_key][next_key] = 1
        # else: 
        #     df_answer_dict[answer_key][next_key] += 1

        # for j in range(0, answer_list_len):
        #     answer_key_j = answer_list[j]
        #     if answer_list[j] not in df_answer_dict[answer_key_i]:
        #         df_answer_dict[answer_key_i][answer_key_j] = (answer_list_len - j)
        #     else:
        #         df_answer_dict[answer_key_i][answer_key_j] += (answer_list_len - j)
    
    global df_answer
    df_answer = pd.DataFrame.from_dict(df_answer_dict,orient='columns').fillna(0)
    # print(df_answer)


def mapAskAndAnswer(ask, answer):

    ask_list = list(ask)
    answer_list = list(answer)

    ask_list_len = len(ask_list)
    answer_list_len = len(answer_list)

    df_ask_answer_dict = df_ask_answer.to_dict(orient='dict')
    for i in range(0, ask_list_len):
        ask_key = ask_list[i]
        if ask_key not in df_ask_answer_dict:
            df_ask_answer_dict[ask_key] = {}
        
        for j in range(0, answer_list_len):
            answer_key = answer_list[j]
            if answer_list[j] not in df_ask_answer_dict[ask_key]:
                df_ask_answer_dict[ask_key][answer_key] = 1
            else:
                df_ask_answer_dict[ask_key][answer_key] += 1

    global df_ask_answer
    df_ask_answer = pd.DataFrame.from_dict(df_ask_answer_dict,orient='columns').fillna(0)
    print(df_ask_answer)

while True:
    command = getCommand()
    print('')

    if command == '1':
        print('train start:')
        while True:
            print('请输入问句：')
            ask = input()
            if ask == 'quit' or ask == 'exit':
                break

            print('请输入回答：')
            answer = input()
            if answer == 'quit' or answer == 'exit':
                break
            mapAskAndAnswer(ask, answer)
            mapAnswer(answer)
        print('train end:')

    command = getCommand()
    print('')

    if command == '2':
        print('test start:')
        while True:
            print('请输入问句：')
            ask = input()
            if ask == 'quit' or ask == 'exit':
                break
            keys = getWords(ask)
            reply = sortWords(keys)
            print('机器人的回答：%s' % reply)
            
        print('test end:')



