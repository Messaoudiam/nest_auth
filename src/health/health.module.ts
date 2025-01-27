import { Module } from '@nestjs/common';
// Terminus: Module de NestJS pour les health checks
import { TerminusModule } from '@nestjs/terminus';
// HttpModule: Nécessaire pour effectuer des vérifications HTTP
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './health.controller';

// Module qui configure les dépendances nécessaires pour les health checks
@Module({
  // Importe les modules requis :
  // - TerminusModule : Pour les fonctionnalités de health check
  // - HttpModule : Pour les vérifications HTTP
  imports: [TerminusModule, HttpModule],
  // Déclare le contrôleur qui gère les endpoints de santé
  controllers: [HealthController],
})
export class HealthModule {}
