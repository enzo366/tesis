# Generated by Django 2.1 on 2019-12-17 14:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sosjujuy', '0013_auto_20191215_1756'),
    ]

    operations = [
        migrations.AddField(
            model_name='domicilio',
            name='departamento',
            field=models.CharField(max_length=60, null=True),
        ),
        migrations.AddField(
            model_name='domicilio',
            name='piso',
            field=models.CharField(max_length=60, null=True),
        ),
    ]