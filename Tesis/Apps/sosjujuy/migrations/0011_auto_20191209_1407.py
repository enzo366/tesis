# Generated by Django 2.1 on 2019-12-09 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sosjujuy', '0010_auto_20181113_1256'),
    ]

    operations = [
        migrations.AlterField(
            model_name='beneficiario',
            name='email',
            field=models.EmailField(default='', max_length=70),
        ),
    ]
