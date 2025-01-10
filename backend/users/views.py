from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login, logout
from users.models import *

# Create your views here.
def login_view(request):
    if request.method == 'POST':
        account = request.POST.get('account')

        if account == 'login':
            email = request.POST.get('email')
            password = request.POST.get('password')
            
            userObject = authenticate(email = email, password = password)

            if userObject is not None:
                login(request, userObject)
                
            else:
                print('fail')
                
        else:
            return redirect('user/join.html')
    
    else:
        pass
    
    return render(request, 'login.html')
    
    
    
def join_view(request):
    if request.method == 'GET':
        return render(request, 'users/join.html')
    
    elif request.method == 'POST':
        id = request.POST.get('id', None)
        password = request.POST.get('password', None)
        password_check = request.POST.get('password_check', None)
        username = request.POST.get('username', None)
        phone_num = request.POST.get('phone_number', None)
        birth = request.POST.get('birth', None)
        account_type = request.POST.get('type', None)
        
        # 유효성 검사
        if not (id and password and username and phone_num and birth):
            print(id, password, username, phone_num, birth)
            error_message = "모든 필드를 올바르게 입력해주세요."
            return render(request, 'users/join.html', {"error": error_message})
        
        # 아이디 중복 확인
        if UserModel.objects.filter(id=id).exists():
            error_message = "이미 존재하는 사용자 아이디입니다."
            return render(request, 'users/join.html', {"error": error_message})

        # 비밀번호 확인 불일치 
        if password != password_check:
            error_message = "비밀번호가 일치하지 않습니다."
            return render(request, 'user/join.html', {"error": error_message})
     
        # 사용자 중복 확인, 추후 올바른 방법으로 수정 필요
        is_manager = True if account_type == '1' else False
        
        exist_user = UserModel.objects.filter(
            id=id,
            username=username,
            password=password,
            birth=birth,
            phone_num=phone_num,
            type=is_manager,
        ).first()
        
        if exist_user:
            return render(request, 'user/join.html')
        else:
            # 사용자 저장
            new_user = UserModel(
                id=id,
                username=username,
                password=password,
                birth=birth,
                phone_num=phone_num,
                type=is_manager
            )
            new_user.save()
            return redirect('/')
        
    return render(request, 'users/join.html')

    