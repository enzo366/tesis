# Generated by Django 2.1.1 on 2018-10-07 23:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sosjujuy', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='beneficiario',
            name='documento',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='beneficiario',
            name='tipo_documento',
            field=models.IntegerField(choices=[(-1, 'Documento Único'), (0, 'Libreta de Enrolamiento'), (1, 'Libreta Cívica')], default=-1),
        ),
        migrations.AlterField(
            model_name='prestador',
            name='documento',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='prestador',
            name='tipo_documento',
            field=models.IntegerField(choices=[(-1, 'Documento Único'), (0, 'Libreta de Enrolamiento'), (1, 'Libreta Cívica')], default=-1),
        ),
    ]
