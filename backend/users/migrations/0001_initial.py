# Generated by Django 5.1.4 on 2025-01-06 20:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=20, verbose_name='Full Name')),
                ('password', models.CharField(max_length=30, verbose_name='Password')),
                ('email', models.EmailField(max_length=128, verbose_name='Email')),
                ('type', models.BooleanField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'my_user',
            },
        ),
    ]
