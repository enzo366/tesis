# Generated by Django 2.1 on 2019-12-22 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sosjujuy', '0021_auto_20191220_1836'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notificacion',
            name='archivo',
            field=models.FileField(blank=True, max_length=254, null=True, upload_to=''),
        ),
    ]
