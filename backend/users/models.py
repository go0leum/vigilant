from django.db import models

# Create your models here.
class UserModel(models.Model):
    class Meta: # 데이터베이스 모델 정보가 담긴 공간 
        db_table = "users"
    
    id = models.AutoField(primary_key=True)  # id 필드를 명시적으로 선언
    username = models.CharField(max_length=20, null=False, verbose_name='Full Name')  # DB와 일치하도록 수정
    password = models.CharField(max_length=30, null=False, verbose_name='Password')  # DB와 일치하도록 수정
    email = models.EmailField(max_length=128, null=False, verbose_name='Email')  # max_length 변경
    type = models.BooleanField(null=False, default=False)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created At')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Updated At')

    def __str__(self):
        return self.username